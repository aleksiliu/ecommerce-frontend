import React from 'react';
import { useStore } from '@nanostores/react';
import { $cart, openCart } from '../stores/cartStore';

const CartTotal: React.FC = () => {
  const cart = useStore($cart);  
  const totalItems = cart.length;


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    openCart();
  };

  return (
    <a href="#" className="relative hover:underline" onClick={handleClick}>
    <span>
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
    </span>
    {totalItems > 0 && (
      <span className="absolute top-2 left-4 inline-flex items-center justify-center h-4 w-4 text-xs leading-none text-white bg-green-600 rounded-full">
        {totalItems}
      </span>
    )}
  </a>
  
  );
};

export default CartTotal;
