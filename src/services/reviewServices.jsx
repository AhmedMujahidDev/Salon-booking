import { reviewData } from "../components/section/Product Detail/ProductDetailData"

export const getProductReviews = async (productId) => {
    return reviewData.filter(
        (review) => String(review.productId) === String(productId)
    );
};

export const createProductReview = async (productId, review) => {
    return {
        id: crypto.randomUUID(),
        productId,
        user: {
            id: "reviewer",
            name: review.name,
        },
        rating: review.rating,
        comment: review.comment,
        createdAt: new Date().toISOString(),
    };
};