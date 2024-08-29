import React from 'react';
import { useStore } from '@nanostores/react';
import { $cart } from '../stores/cartStore';


const CartTotal: React.FC = () => {
  const cart = useStore($cart);  // Automatically re-renders when $cart changes

  // Calculate the total price and the number of items in the cart
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart-total">
      <span>Cart: ({totalItems}) {''}</span>
      <span>${totalPrice.toFixed(2)}</span>
    </div>
  );
};

export default CartTotal;
