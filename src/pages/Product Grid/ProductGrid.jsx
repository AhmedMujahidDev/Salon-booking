import Banner from "@/components/common/Banner";
import FilterSidebar from "../../components/section/Product Grid/FilterSidebar";
import SortDropdown from "../../components/section/Product Grid/SortDropdown";
import useProducts from "../../hooks/useProducts";
import Product from "@/components/section/Product Grid/Product";

const Products = () => {
  const {
    products,
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
  } = useProducts();

  return (
    <section>
      {/* Banner */}
      <Banner
        title="Shop"
        breadcrumbs={["Home", "Shop"]}
      />

      {/* Products Section */}
      <div className="container-custom py-10">

        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-[250px_1fr]">

          <FilterSidebar
            search={search}
            setSearch={setSearch}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedRatings={selectedRatings}
            setSelectedRatings={setSelectedRatings}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            resetFilters={resetFilters}
          />

          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {products.length} Products Found
              </p>

              <SortDropdown
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            <Product products={products} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;