import React from 'react';
import { useStore } from '@nanostores/react';
import { $favorites } from '../stores/favoritesStore';
import type { Product } from '../types';
import ProductCard from './ProductCard';

const FavoritesList: React.FC = () => {
  const favorites = useStore($favorites); // Automatically re-renders when $favorites changes
  console.log(favorites)

  if (favorites.length === 0) {
    return <p>You have no favorite items yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {favorites.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FavoritesList;
