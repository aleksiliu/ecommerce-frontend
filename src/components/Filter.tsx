import React from 'react';

interface FilterAndSortProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
  categories: string[];
}

const Filter: React.FC<FilterAndSortProps> = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
}) => {
  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
      <div>
        <label htmlFor="sort-select">Sort by: </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
          <option value="">None</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div>
        <label htmlFor="category-select">Filter by category: </label>
        <select
          id="category-select"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;