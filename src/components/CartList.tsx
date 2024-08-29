import React from 'react';
import { useStore } from '@nanostores/react';
import { $cart, removeFromCart } from '../stores/cartStore';
import type { Product } from '../types';

const CartList: React.FC = () => {
  const cart = useStore($cart);  

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cart.map((product: Product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <button
            onClick={() => removeFromCart(product.id)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartList;
