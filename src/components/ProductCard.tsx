import React from 'react';
import type { Product } from '../types';
import { useStore } from '@nanostores/react';
import { addToFavorites, $favorites } from '../stores/favoritesStore.ts';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {


  const handleAddToFavorites = () => {
    addToFavorites(product);
  };

  const favorites = useStore($favorites); 

  const isInFavorites = favorites.some(fav => fav.id === product.id);

  return (
    <div className="bg-white relative overflow-hidden rounded-lg transform shadow-md duration-300 hover:scale-105 hover:shadow-lg group">
      <div className="relative w-full h-48">
        <img
          className="absolute inset-0 w-full h-full object-contain object-center"
          src={product.image}
          alt={product.title}
        />
        <div className="absolute top-2 right-2 p-2 rounded-full bg-white opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={handleAddToFavorites} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          {isInFavorites ? (
          <svg className="w-6 h-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-slate-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        )}
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between h-48">
          <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <div className='flex justify-between gap-4'>
        <p className="text-xl mt-2 text-gray-600">${product.price.toFixed(2)}</p>
        <button
            className="relative px-3 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300 flex items-center"
            onClick={() => alert('Added to Cart')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h12M16 13l2 6M6 16h12M7 19a2 2 0 110 4 2 2 0 010-4zm10 0a2 2 0 110 4 2 2 0 010-4z"
              />
            </svg>
            <span
              className="ml-2 hidden group-hover:inline"
            >
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
