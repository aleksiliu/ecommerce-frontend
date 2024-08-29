import React from 'react';
import { useStore } from '@nanostores/react';
import { $cart, openCart } from '../stores/cartStore';

const CartTotal: React.FC = () => {
  const cart = useStore($cart);  
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    openCart();
  };

  return (
    <a href="#" className="cart-total hover:underline" onClick={handleClick}>
      <span>Cart: ({totalItems}) </span>
      <span>${totalPrice.toFixed(2)}</span>
    </a>
  );
};

export default CartTotal;