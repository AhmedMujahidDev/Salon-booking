import { products } from "@/components/section/Product Grid/products";
import { useMemo, useState } from "react";

const useProducts = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [priceRange, setPriceRange] = useState(150);
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category),
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedColors.includes(product.color),
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedRatings.includes(product.rating),
      );
    }

    result = result.filter((product) => product.price <= priceRange);

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;

      case "oldest":
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;

      case "high-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "low-high":
        result.sort((a, b) => a.price - b.price);
        break;

      case "relevance":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return result;
  }, [
    search,
    selectedCategories,
    selectedColors,
    selectedRatings,
    priceRange,
    sortBy,
  ]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedRatings([]);
    setPriceRange(150);
    setSortBy("newest");
  };

  return {
    products: filteredProducts,

    search,
    setSearch,

    selectedCategories,
    setSelectedCategories,

    selectedColors,
    setSelectedColors,

    selectedRatings,
    setSelectedRatings,

    priceRange,
    setPriceRange,

    sortBy,
    setSortBy,

    resetFilters,
  };
};

export default useProducts;
