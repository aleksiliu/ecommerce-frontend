import React from 'react';
import type { Product } from '../types';

const ProductCard: React.FC<{ product: Product }>= ({ product }) => {

  return (
    <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <button onClick={() => alert('Added to Cart')}>Add to Cart</button>
    </div>
  );
};


export default ProductCard;
