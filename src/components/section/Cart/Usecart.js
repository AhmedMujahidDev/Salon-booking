import { useCallback, useEffect, useState } from "react";
import * as cartApi from "../../../services/Cartapi.jsx";

/**
 * All cart state and actions live here, so the UI never talks to the API directly.
 * Every action returns the whole updated cart from the server and we just store it.
 */
export function useCart({ loadOnMount = true } = {}) {
  const [cart, setCart] = useState(null);
  const [status, setStatus] = useState(loadOnMount ? "loading" : "ready"); // loading | ready | error
  const [loadError, setLoadError] = useState("");
  const [pending, setPending] = useState(false); // true while an action is running
  const [actionError, setActionError] = useState("");

  const load = useCallback(async () => {
    setStatus("loading");
    setLoadError("");
    try {
      setCart(await cartApi.getCart());
      setStatus("ready");
    } catch (err) {
      setLoadError(err.message);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    if (!loadOnMount) {
      return;
    }

    let active = true;
    cartApi.getCart()
      .then((data) => {
        if (active) {
          setCart(data);
          setStatus("ready");
        }
      })
      .catch((err) => {
        if (active) {
          setLoadError(err.message);
          setStatus("error");
        }
      });

    return () => {
      active = false;
    };
  }, [loadOnMount]);

  // Runs one action, stores the new cart, and reports success or a readable error.
  const run = useCallback(async (action) => {
    setPending(true);
    setActionError("");
    try {
      setCart(await action());
      return { ok: true };
    } catch (err) {
      setActionError(err.message);
      return { ok: false, message: err.message };
    } finally {
      setPending(false);
    }
  }, []);

  return {
    cart,
    status,
    loadError,
    pending,
    actionError,
    reload: load,
    addItem: (productId, quantity = 1, variant = null) =>
      run(() => cartApi.addItem(productId, quantity, variant)),
    changeQuantity: (lineId, quantity) => run(() => cartApi.updateQuantity(lineId, quantity)),
    remove: (lineId) => run(() => cartApi.removeItem(lineId)),
    clear: () => run(() => cartApi.clearCart()),
    applyCoupon: (code) => run(() => cartApi.applyCoupon(code)),
    removeCoupon: () => run(() => cartApi.removeCoupon()),
  };
}