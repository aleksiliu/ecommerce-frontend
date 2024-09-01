import React from 'react';
import { useStore } from '@nanostores/react';
import { $cart, removeFromCart } from '../stores/cartStore';
import type { Product } from '../types';
import { $isCartOpen, closeCart } from '../stores/cartStore';
import { formatCurrency } from '../utils/formatCurrency'; // Add this import

const CartSidebar: React.FC = () => {
  const cart = useStore($cart);
  const isOpen = useStore($isCartOpen);

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

  if (!isOpen) return null;

  return (
    <>
      {/* Dark overlay behind the sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart} 
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
        aria-label="Shopping cart"
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Your Cart ({totalItems})</h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
            Close
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-135px)]"> 
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((product: Product) => (
                <li key={product.id} className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{product.title}</h4>
                      <p className="text-gray-600">{formatCurrency(product.price)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-slate-500 hover:text-slate-700"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length > 0 && 
          <div className="p-4 border-t">
            <button onClick={() => alert('Thanks for shopping')} className="w-full px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-900 transition-colors duration-300">
              Confirm Order {formatCurrency(parseFloat(totalPrice))}
            </button>
          </div>
        }
      </aside>
    </>
  );
};

export default CartSidebar;
