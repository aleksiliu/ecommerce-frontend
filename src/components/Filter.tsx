import React from 'react';

interface FilterProps {
  sortOrder: string;
  setSortOrder: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <div>
      <select
        onChange={(e) => setSortOrder(e.target.value)}
        value={sortOrder}
      >
        <option value="default">Sort by</option>
        <option value="low-to-high">Lowest Price First</option>
        <option value="high-to-low">Highest Price First</option>
      </select>
    </div>
  );
};


export default Filter;
