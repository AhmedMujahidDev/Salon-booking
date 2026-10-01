import ProductCard from "./ProductCard";

const Product = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="col-span-full py-20 text-center">
        <h3 className="text-lg font-semibold">
          No products found
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Product;