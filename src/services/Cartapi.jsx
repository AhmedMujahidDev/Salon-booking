import { products as productCatalog } from "../components/section/Product Grid/products.js";

/**
 * CART API LAYER  (the only file that knows where cart data comes from)
 * ---------------------------------------------------------------------
 * Right now it uses a MOCK that stores the cart in localStorage.
 * When your backend is ready:
 *   1. set USE_MOCK = false
 *   2. set BASE_URL to your API (e.g. "http://localhost:5000/api")
 *   3. make your endpoints return the exact shapes below. No UI changes needed.
 *
 * RULES THAT PREVENT BACKEND PROBLEMS LATER
 *  - Money is always an INTEGER in the smallest unit (cents/paisa): $120.00 = 12000.
 *    Floats like 0.1 + 0.2 cause wrong totals.
 *  - The SERVER calculates subtotal, discount, tax, delivery and total.
 *    The frontend only displays them and never sends prices or totals.
 *  - The frontend sends product IDs, quantity, selected variant and coupon code, never prices.
 *  - Every action returns the FULL updated cart, so the UI has one source of truth.
 *  - Errors come back as { message } with a proper HTTP status (400, 404, 409, 422).
 *
 * ENDPOINTS (Express style, success responses are wrapped as { data })
 *   GET    /cart                      -> Cart
 *   POST   /cart/items                body { productId, quantity, variant? } -> Cart
 *   PATCH  /cart/items/:lineId        body { quantity }   -> Cart
 *   DELETE /cart/items/:lineId        -> Cart
 *   DELETE /cart                      -> Cart  (clear)
 *   POST   /cart/coupon               body { code }       -> Cart
 *   DELETE /cart/coupon               -> Cart
 *
 * Cart shape
 * {
 *   currency: "USD",
 *   itemCount: 3,
 *   items: [{
 *     id: "line_1",            // cart line id (NOT the product id)
 *     productId: "p_101",
 *     name: "Pro Cut Trimmer",
 *     image: "https://...",
 *     category: "Grooming Tools",
 *     variant: { label: "Color", value: "Royal Grey" } | null,
 *     unitPrice: 12000,        // cents
 *     quantity: 1,
 *     maxQuantity: 10          // from stock, enforced again by the server
 *   }],
 *   coupon: { code: "SAVE20", percentOff: 20 } | null,
 *   availableCoupons: [{ code, percentOff, description }],
 *   totals: { subtotal, discount, deliveryFee, tax, shipping, total }   // all cents
 * }
 */

const USE_MOCK = true;
const BASE_URL = "/api";

export class ApiError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export function formatMoney(cents, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    (cents || 0) / 100
  );
}

/* ----------------------------- REAL API ----------------------------- */

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include", // send the login cookie, if you use cookie auth
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    throw new ApiError(body?.message || "Something went wrong. Please try again.", res.status);
  }
  return body.data;
}

const realApi = {
  getCart: () => request("/cart"),
  addItem: (productId, quantity, variant) =>
    request("/cart/items", {
      method: "POST",
      body: JSON.stringify({ productId, quantity, variant }),
    }),
  updateQuantity: (lineId, quantity) =>
    request(`/cart/items/${lineId}`, { method: "PATCH", body: JSON.stringify({ quantity }) }),
  removeItem: (lineId) => request(`/cart/items/${lineId}`, { method: "DELETE" }),
  clearCart: () => request("/cart", { method: "DELETE" }),
  applyCoupon: (code) => request("/cart/coupon", { method: "POST", body: JSON.stringify({ code }) }),
  removeCoupon: () => request("/cart/coupon", { method: "DELETE" }),
};

/* ------------------------------ MOCK API ------------------------------ */
/* Behaves like the real server: it owns the rules and the math.          */

const STORAGE_KEY = "mock_cart_v2";
const CURRENCY = "USD";

const COUPONS = [
  { code: "SAVE20", percentOff: 20, appliesToTag: null, description: "Enjoy a site wide discount on all products." },
  { code: "BEARD15", percentOff: 15, appliesToTag: "beard", description: "Exclusive discount on all beard grooming products." },
];

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore and fall back to an empty cart */
  }
  return { items: [], couponCode: null };
}

let state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage can be full or blocked, the cart still works in memory */
  }
}

const eligibleSubtotal = (coupon) =>
  state.items
    .filter((i) => !coupon.appliesToTag || i.tags.includes(coupon.appliesToTag))
    .reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

function buildCart() {
  let coupon = COUPONS.find((c) => c.code === state.couponCode) || null;
  // The server drops a coupon that no longer applies (for example after removing items).
  if (coupon && eligibleSubtotal(coupon) === 0) {
    coupon = null;
    state.couponCode = null;
    saveState();
  }

  const hasItems = state.items.length > 0;
  const subtotal = state.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
  const discount = coupon ? Math.round((eligibleSubtotal(coupon) * coupon.percentOff) / 100) : 0;
  const deliveryFee = hasItems ? 1000 : 0;
  const tax = hasItems ? 1000 : 0;
  const shipping = 0;

  return {
    currency: CURRENCY,
    itemCount: state.items.reduce((count, item) => count + item.quantity, 0),
    items: state.items.map((item) => {
      const cartItem = { ...item };
      delete cartItem.tags;
      return cartItem;
    }),
    coupon: coupon ? { code: coupon.code, percentOff: coupon.percentOff } : null,
    availableCoupons: COUPONS.map(({ code, percentOff, description }) => ({ code, percentOff, description })),
    totals: { subtotal, discount, deliveryFee, tax, shipping, total: subtotal - discount + deliveryFee + tax + shipping },
  };
}

const wait = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

const mockApi = {
  async getCart() {
    await wait();
    return buildCart();
  },
  async addItem(productId, quantity, variant = null) {
    await wait();

    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new ApiError("Quantity must be at least 1.", 422);
    }

    const product = productCatalog.find(
      (item) => String(item.id) === String(productId)
    );
    if (!product) {
      throw new ApiError("This product is no longer available.", 404);
    }

    const normalizedVariant = variant?.value
      ? { label: variant.label || "Option", value: variant.value }
      : null;
    const existingItem = state.items.find(
      (item) =>
        String(item.productId) === String(product.id) &&
        item.variant?.value === normalizedVariant?.value
    );
    const maxQuantity = existingItem?.maxQuantity ?? 10;

    if ((existingItem?.quantity ?? 0) + quantity > maxQuantity) {
      throw new ApiError(`Only ${maxQuantity} available.`, 409);
    }

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      state.items.push({
        id: `line_${product.id}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        productId: product.id,
        name: product.name,
        image: product.image || product.images?.[0] || "",
        category: product.category || product.type || "Products",
        tags: [],
        variant: normalizedVariant,
        unitPrice: Math.round(product.price * 100),
        quantity,
        maxQuantity,
      });
    }

    saveState();
    return buildCart();
  },
  async updateQuantity(lineId, quantity) {
    await wait();
    const item = state.items.find((i) => i.id === lineId);
    if (!item) throw new ApiError("This item is no longer in your cart.", 404);
    if (!Number.isInteger(quantity) || quantity < 1) throw new ApiError("Quantity must be at least 1.", 422);
    if (quantity > item.maxQuantity) throw new ApiError(`Only ${item.maxQuantity} available.`, 409);
    item.quantity = quantity;
    saveState();
    return buildCart();
  },
  async removeItem(lineId) {
    await wait();
    state.items = state.items.filter((i) => i.id !== lineId);
    saveState();
    return buildCart();
  },
  async clearCart() {
    await wait();
    state.items = [];
    state.couponCode = null;
    saveState();
    return buildCart();
  },
  async applyCoupon(rawCode) {
    await wait();
    const code = String(rawCode || "").trim().toUpperCase();
    if (!code) throw new ApiError("Enter a promo code.", 400);
    const coupon = COUPONS.find((c) => c.code === code);
    if (!coupon) throw new ApiError("This promo code isn't valid.", 404);
    if (eligibleSubtotal(coupon) === 0) throw new ApiError("This code doesn't apply to the items in your cart.", 422);
    state.couponCode = code;
    saveState();
    return buildCart();
  },
  async removeCoupon() {
    await wait();
    state.couponCode = null;
    saveState();
    return buildCart();
  },
};

const api = USE_MOCK ? mockApi : realApi;

export const getCart = (...args) => api.getCart(...args);
export const addItem = (...args) => api.addItem(...args);
export const updateQuantity = (...args) => api.updateQuantity(...args);
export const removeItem = (...args) => api.removeItem(...args);
export const clearCart = (...args) => api.clearCart(...args);
export const applyCoupon = (...args) => api.applyCoupon(...args);
export const removeCoupon = (...args) => api.removeCoupon(...args);