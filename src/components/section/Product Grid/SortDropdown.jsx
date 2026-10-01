import React from 'react'

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="border border-gray-200 px-4 py-2 text-sm outline-none">

      <option value="newest">Newest</option>
      <option value="oldest">oldest</option>
      <option value="high-low">High to Low</option>
      <option value="low-high">Low to High</option>
      <option value="relevance">Relevance</option>
    </select>
  )
}

export default SortDropdown