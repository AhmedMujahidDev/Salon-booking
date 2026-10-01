import { Search, ChevronUp, ChevronDown, Star } from "lucide-react";
import { useState } from "react";

const categories = [
  "Hair Care",
  "Skin Care",
  "Masks & Exfoliation",
  "Body Care",
  "Beauty & Makeup",
  "Natural & Herbal Care",
];

const colors = [
  { name: "Red", value: "Red", className: "bg-red-500" },
  { name: "Green", value: "Green", className: "bg-green-500" },
  { name: "Orange", value: "Orange", className: "bg-orange-500" },
  { name: "Pink", value: "Pink", className: "bg-pink-500" },
  { name: "Purple", value: "Purple", className: "bg-purple-500" },
];

const ratings = [5, 4, 3, 2, 1];

const FilterSidebar = ({
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

  resetFilters,
}) => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    colors: true,
    price: true,
    reviews: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((item) => item !== rating)
        : [...prev, rating]
    );
  };

  return (
    <aside className="w-full border border-gray-200 bg-white">

      {/* Header */}
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Filter
        </h2>
      </div>

      <div className="divide-y divide-gray-200">

        {/* Search */}
        <div className="p-5">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="h-10 w-full border border-gray-200 px-3 pr-10 text-sm outline-none transition focus:border-gray-400"
            />

            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Categories */}
        <FilterSection
          title="Categories"
          isOpen={openSections.categories}
          onToggle={() => toggleSection("categories")}
        >
          <div className="space-y-2.5">
            {categories.map((category) => (
              <label
                key={category}
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="h-3.5 w-3.5 accent-primary"
                />

                <span>{category}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Colors */}
        <FilterSection
          title="Color"
          isOpen={openSections.colors}
          onToggle={() => toggleSection("colors")}
        >
          <div className="space-y-2.5">
            {colors.map((color) => (
              <label
                key={color.value}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color.value)}
                  onChange={() => handleColorChange(color.value)}
                  className="h-3.5 w-3.5 accent-primary"
                />

                <span
                  className={`h-3 w-3 rounded-full ${color.className}`}
                />

                <span>{color.name}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Price */}
        <FilterSection
          title="Price"
          isOpen={openSections.price}
          onToggle={() => toggleSection("price")}
        >
          <div>
            <input
              type="range"
              min="0"
              max="150"
              step="5"
              value={priceRange}
              onChange={(e) =>
                setPriceRange(Number(e.target.value))
              }
              className="w-full cursor-pointer accent-primary"
            />

            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>${priceRange}</span>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Range: $0 - ${priceRange}
            </p>
          </div>
        </FilterSection>

        {/* Reviews */}
        <FilterSection
          title="Reviews"
          isOpen={openSections.reviews}
          onToggle={() => toggleSection("reviews")}
        >
          <div className="space-y-2.5">
            {ratings.map((rating) => (
              <label
                key={rating}
                className="flex cursor-pointer items-center gap-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                  className="h-3.5 w-3.5 accent-primary"
                />

                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      className={
                        index < rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <span className="text-xs text-gray-500">
                  {rating}.0
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Buttons */}
        <div className="flex gap-2 p-5">
          <button
            type="button"
            onClick={resetFilters}
            className="flex-1 bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Reset
          </button>

          <button
            type="button"
            className="flex-1 bg-primary px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Filter
          </button>
        </div>

      </div>
    </aside>
  );
};

export default FilterSidebar;


// Reusable section
const FilterSection = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="p-5">
      <button
        type="button"
        onClick={onToggle}
        className="mb-4 flex w-full items-center justify-between"
      >
        <span className="text-sm font-semibold text-gray-900">
          {title}
        </span>

        {isOpen ? (
          <ChevronUp size={16} />
        ) : (
          <ChevronDown size={16} />
        )}
      </button>

      {isOpen && children}
    </div>
  );
};