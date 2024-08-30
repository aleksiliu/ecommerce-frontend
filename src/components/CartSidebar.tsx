import React from 'react';
import { useStore } from '@nanostores/react';
import { $cart, removeFromCart } from '../stores/cartStore';
import type { Product } from '../types';
import { $isCartOpen, closeCart } from '../stores/cartStore';


const CartSidebar: React.FC = () => {
  const cart = useStore($cart);
  const isOpen = useStore($isCartOpen);

  const totalItems = cart.length;

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-semibold">Your Cart ({totalItems})</h2>
        <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
          Close
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-56px)]">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product: Product) => (
            <div key={product.id} className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-semibold">{product.title}</h4>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
