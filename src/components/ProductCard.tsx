import React from 'react';
import type { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-lg transform shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative w-full h-48">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-48">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
          <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
        </div>
        <button
          className="mt-auto w-full px-3 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
          onClick={() => alert('Added to Cart')}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
