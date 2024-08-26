import React from 'react';

interface FilterProps {
  sortOrder: string;
  setSortOrder: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <form>
      <select
        onChange={(e) => setSortOrder(e.target.value)}
        value={sortOrder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
      
        <option value="default">Sort by</option>
        <option value="low-to-high">Lowest Price First</option>
        <option value="high-to-low">Highest Price First</option>
      </select>
    </form>
  );
};


export default Filter;
