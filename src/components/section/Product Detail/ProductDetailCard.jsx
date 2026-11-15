import { useEffect, useState } from "react";
import { getProductReviews, createProductReview } from "../../../services/reviewServices";
import { useParams } from "react-router-dom";
import {
    Heart,
    Share2,
    Star,
    Minus,
    Plus,
    ShoppingCart,
    Truck,
    RotateCcw,
    Undo2,
} from "lucide-react";

import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import { productsDetailData as products } from "@/components/section/Product Detail/ProductDetailData";
import { getTimeAgo } from "@/utils/getTimeAgo";
import { useCart } from "../Cart/Usecart";

const TABS = [
    { id: "description", label: "Description" },
    { id: "specification", label: "Specification" },
    { id: "reviews", label: "Reviews" },
    { id: "shipping", label: "Shipping & Returns" },
];

const ProductDetailCard = () => {
    const { id } = useParams();

    const product = products.find(
        (item) => String(item.id) === String(id)
    );

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(
        product?.colors?.[0] ?? ""
    );
    const [activeTab, setActiveTab] = useState("description");
    const [cartMessage, setCartMessage] = useState("");
    const { addItem, pending } = useCart({ loadOnMount: false });

    const [reviewForm, setReviewForm] = useState({
        name: "",
        rating: 5,
        comment: "",
    });

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const loadReviews = async () => {
            const data = await getProductReviews(product.id)
            setReviews(data)
        }
        if (product?.id) {
            loadReviews();
        }
    }, [product?.id])

    const [reviewMessage, setReviewMessage] = useState("");

    if (!product) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Product Not Found</h1>
                    <p className="text-gray-500 mt-2">
                        The product you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    const increaseQuantity = () => {
        setQuantity((previous) => previous + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((previous) =>
            previous > 1 ? previous - 1 : 1
        );
    };

    const handleAddToCart = async () => {
        const result = await addItem(
            product.id,
            quantity,
            selectedColor ? { label: "Color", value: selectedColor } : null
        );
        setCartMessage(result.ok ? "Added to cart." : result.message);
    };

    const handleReviewSubmit = async (event) => {
        event.preventDefault();

        const name = reviewForm.name.trim();
        const comment = reviewForm.comment.trim();

        if (!name || !comment) {
            setReviewMessage("Please enter your name and review.");
            return;
        }

        try {
            const newReview = await createProductReview(product.id, {
                name,
                rating: Number(reviewForm.rating),
                comment,
            });
            setReviews((previous) => [...previous, newReview]);
            setReviewForm({
                name: "",
                rating: 5,
                comment: "",
            });
            setReviewMessage("Review added successfully.");
        } catch {
            setReviewMessage("Unable to submit review.");
        }
    };

    const specifications = product.specifications || {};
    const hasSpecifications = Object.keys(specifications).length > 0;

    const avatar = createAvatar(avataaars, {
        seed: "Ahmed",
        radius: 50,
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="border mt-6 p-4 space-y-4 shadow-lg">
                {/* PRODUCT TOP */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* LEFT: IMAGES */}
                    <div>
                        <div className="relative bg-gray-50 h-[500px] flex items-center justify-center">
                            {product.discount > 0 && (
                                <span className="absolute top-4 left-0 bg-red-500 rounded-r-2xl text-white text-sm px-3 py-1">
                                    {product.discount}% OFF
                                </span>
                            )}

                            {product.images?.length > 0 ? (
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="max-h-[450px] max-w-full object-contain"
                                />
                            ) : (
                                <p className="text-gray-500">No image available</p>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-4">
                            {product.images?.map((image, index) => (
                                <button
                                    key={`${image}-${index}`}
                                    type="button"
                                    onClick={() => setSelectedImage(index)}
                                    aria-label={`View image ${index + 1}`}
                                    aria-pressed={selectedImage === index}
                                    className={`w-40 h-40 p-2 bg-gray-50 ${selectedImage === index
                                        ? "bg-gray-100"
                                        : "border-gray-200"
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: PRODUCT INFO */}
                    <div>
                        <span className="inline-block bg-black text-white rounded-sm text-sm px-3 py-1 mb-3">
                            {product.type}
                        </span>

                        <h1 className="text-3xl font-bold">{product.name}</h1>


                        <div className="flex items-center justify-between gap-2 mt-3">
                            {/* Price */}
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-3xl font-bold">
                                    ${product.price}
                                </span>

                                {product.originalPrice != null && (
                                    <del className="text-gray-400">
                                        ${product.originalPrice}
                                    </del>
                                )}
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mt-3">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={16}
                                            fill={
                                                star <= (product.rating || 0)
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                        />
                                    ))}
                                </div>

                                <span className="text-lg">
                                    {product.rating ?? 0} ({product.reviews ?? 0})
                                </span>
                            </div>
                        </div>

                        {/* Stock */}
                        <div className="mt-3">
                            <span className="bg-green-100 text-green-700 text-xs px-3 py-1">
                                In Stock
                            </span>
                        </div>

                        {/* Short Description */}
                        <div className="border-t border-b py-5 my-5">
                            <h3 className="font-bold text-lg mb-2">
                                Short Description:
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {product.shortDescription ||
                                    "No short description available."}
                            </p>
                        </div>

                        {/* Colors */}
                        {product.colors?.length > 0 && (
                            <div className="mb-5">
                                <h3 className="font-semibold mb-3">
                                    Color: {selectedColor}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setSelectedColor(color)}
                                            aria-pressed={selectedColor === color}
                                            className={`border px-4 py-2 text-sm ${selectedColor === color
                                                ? "border-black"
                                                : "border-gray-300"
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity + Cart */}
                        <div className="flex flex-wrap gap-3 mb-5">
                            <div className="flex items-center border bg-gray-50j ">
                                <button
                                    type="button"
                                    onClick={decreaseQuantity}
                                    aria-label="Decrease quantity"
                                    className="px-3 py-2"
                                >
                                    <Minus size={16} />
                                </button>

                                <span className="px-4" aria-live="polite">
                                    {quantity}
                                </span>

                                <button
                                    type="button"
                                    onClick={increaseQuantity}
                                    aria-label="Increase quantity"
                                    className="px-3 py-2"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={handleAddToCart}
                                disabled={pending}
                                className="flex-1 min-w-36 bg-accent-foreground text-white px-4 py-3 flex items-center justify-center gap-2 hover:bg-orange-700"
                            >
                                <ShoppingCart size={18} />
                                {pending ? "Adding..." : "Add to Cart"}
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    alert(
                                        `Buy Now: ${product.name}. Connect your checkout logic to continue.`
                                    )
                                }
                                className="flex-1 min-w-36 bg-black text-white px-6 py-3"
                            >
                                Buy Now
                            </button>
                        </div>
                        {cartMessage && (
                            <p className="mb-5 text-sm" role="status">
                                {cartMessage}
                            </p>
                        )}

                        {/* Wishlist / Compare / Share */}
                        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                            <button
                                type="button"
                                onClick={() =>
                                    alert("Connect your wishlist functionality.")
                                }
                                className="flex items-center gap-1"
                            >
                                <Heart size={16} />
                                Wishlist
                            </button>

                            <button
                                type="button"
                                onClick={async () => {
                                    try {
                                        await navigator.clipboard.writeText(
                                            window.location.href
                                        );
                                        alert("Product link copied!");
                                    } catch {
                                        alert("Unable to copy the product link.");
                                    }
                                }}
                                className="flex items-center gap-1"
                            >
                                <Share2 size={16} />
                                Share
                            </button>
                        </div>

                        {/* Delivery */}
                        <div className="border mt-6 p-4 space-y-4">
                            <div className="flex gap-3">
                                <Truck size={32} color="white" className="shrink-0 bg-foreground rounded-full p-1.5 " />

                                <div>
                                    <h3 className="font-bold text-lg">Fast Delivery</h3>
                                    <p className="text-sm text-gray-500">
                                        {product.shipping ||
                                            "Shipping information is not available."}
                                    </p>
                                </div>
                            </div>
                            <div className="border -mx-4"></div>

                            <div className="flex gap-3">
                                <RotateCcw size={32} color="white" className="shrink-0  bg-foreground rounded-full p-1.5" />

                                <div>
                                    <h3 className="font-bold text-lg">Easy Returns</h3>
                                    <p className="text-sm text-gray-500">
                                        {product.returns ||
                                            "Return policy information is not available."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM TABS */}
                <div className="mt-12 border-t pt-8">
                    {/* TAB BUTTONS */}
                    <div
                        className="flex flex-wrap gap-6 border-b"
                        role="tablist"
                        aria-label="Product details"
                    >
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                id={`tab-${tab.id}`}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                aria-controls={`panel-${tab.id}`}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    setReviewMessage("");
                                }}
                                className={`pb-4 border-b-2 transition-colors ${activeTab === tab.id
                                    ? "border-orange-600 font-semibold text-black"
                                    : "border-transparent text-gray-500 hover:text-black"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* TAB CONTENT */}
                    <div className=" py-4 min-h-44">
                        {/* DESCRIPTION */}
                        {activeTab === "description" && (
                            <div
                                id="panel-description"
                                role="tabpanel"
                                aria-labelledby="tab-description"
                            >

                                <p className="text-gray-600 leading-7 whitespace-pre-line">
                                    {product.description ||
                                        product.shortDescription ||
                                        "No description available."}
                                </p>
                            </div>
                        )}

                        {/* SPECIFICATIONS */}
                        {activeTab === "specification" && (
                            <div
                                id="panel-specification"
                                role="tabpanel"
                                aria-labelledby="tab-specification"
                            >

                                {hasSpecifications ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                        {Object.entries(specifications).map(
                                            ([key, value]) => (
                                                <div
                                                    key={key}
                                                    className="flex justify-between gap-4 border-b py-3"
                                                >
                                                    <span className="font-medium">{key}</span>

                                                    <span className="text-gray-500 text-right">
                                                        {String(value)}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">
                                        No specifications available.
                                    </p>
                                )}
                            </div>
                        )}

                        {/* REVIEWS */}
                        {activeTab === "reviews" && (
                            <div
                                id="panel-reviews"
                                role="tabpanel"
                                aria-labelledby="tab-reviews"
                            >

                                {/* Submitted Reviews */}
                                <div className="space-y-4 mb-8">
                                    {reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="border p-4"
                                        >
                                            <div className="flex items-center">
                                                <img
                                                    src={avatar.toDataUri()}
                                                    alt="User Avatar"
                                                    className="w-13 h-13" />
                                                <div>
                                                    <p className="font-semibold">
                                                        {review.user?.name ?? review.name}
                                                    </p>

                                                    <p className="text-sm text-gray-500">
                                                        {getTimeAgo(review.createdAt)}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 whitespace-pre-line mt-4">
                                                {review.comment}
                                            </p>

                                            <div className="flex justify-end items-center gap-4">
                                                <div className="flex items-center gap-1 my-2">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star
                                                            key={star}
                                                            size={15}
                                                            fill={
                                                                star <= review.rating
                                                                    ? "currentColor"
                                                                    : "none"
                                                            }
                                                            className={
                                                                star <= review.rating
                                                                    ? "text-yellow-500"
                                                                    : "text-gray-300"
                                                            }
                                                        />
                                                    ))}
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="flex items-center gap-2 bg-muted text-gray-700 font-bold px-5 py-2 rounded hover:bg-muted-foreground cursor-pointer"
                                                >
                                                    <Undo2 size={20} />Reply
                                                </button>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Review Form */}
                                <form
                                    className="max-w-xl space-y-4"
                                    onSubmit={handleReviewSubmit}
                                >
                                    <h3 className="font-semibold">Write a Review</h3>

                                    <div>
                                        <label
                                            htmlFor="review-name"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Your Name
                                        </label>

                                        <input
                                            id="review-name"
                                            type="text"
                                            value={reviewForm.name}
                                            onChange={(event) => {
                                                setReviewForm((previous) => ({
                                                    ...previous,
                                                    name: event.target.value,
                                                }));
                                                setReviewMessage("");
                                            }}
                                            className="w-full border rounded px-3 py-2"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="review-rating"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Your Rating
                                        </label>

                                        <select
                                            id="review-rating"
                                            value={reviewForm.rating}
                                            onChange={(event) =>
                                                setReviewForm((previous) => ({
                                                    ...previous,
                                                    rating: Number(event.target.value),
                                                }))
                                            }
                                            className="border rounded px-3 py-2"
                                        >
                                            {[5, 4, 3, 2, 1].map((rating) => (
                                                <option key={rating} value={rating}>
                                                    {rating} Star{rating > 1 ? "s" : ""}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="review-comment"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Your Review
                                        </label>

                                        <textarea
                                            id="review-comment"
                                            value={reviewForm.comment}
                                            onChange={(event) => {
                                                setReviewForm((previous) => ({
                                                    ...previous,
                                                    comment: event.target.value,
                                                }));
                                                setReviewMessage("");
                                            }}
                                            className="w-full border rounded px-3 py-2"
                                            rows={4}
                                            placeholder="Share your experience..."
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-700 cursor-pointer"
                                    >
                                        Submit Review
                                    </button>

                                    {reviewMessage && (
                                        <p
                                            className="text-sm text-gray-600"
                                            role="status"
                                        >
                                            {reviewMessage}
                                        </p>
                                    )}
                                </form>
                            </div>
                        )}

                        {/* SHIPPING & RETURNS */}
                        {activeTab === "shipping" && (
                            <div
                                id="panel-shipping"
                                role="tabpanel"
                                aria-labelledby="tab-shipping"
                                className="space-y-6"
                            >
                                <div className="flex gap-3">
                                    <Truck size={24} className="shrink-0" />

                                    <div>
                                        <h3 className="font-semibold mb-1">
                                            Shipping & Delivery
                                        </h3>

                                        <p className="text-gray-600 leading-7 whitespace-pre-line">
                                            {product.shipping ||
                                                "Shipping information is not available."}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <RotateCcw size={24} className="shrink-0" />

                                    <div>
                                        <h3 className="font-semibold mb-1">
                                            Returns & Refunds
                                        </h3>

                                        <p className="text-gray-600 leading-7 whitespace-pre-line">
                                            {product.returns ||
                                                "Return policy information is not available."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCard;