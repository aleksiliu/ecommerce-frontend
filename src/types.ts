export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface CartItem extends Product {
    quantity: number;
  }

export interface FilterAndSortProps {
    sortBy: string;
    setSortBy: (value: string) => void;
    filterCategory: string;
    setFilterCategory: (value: string) => void;
    categories: string[];
  }
  