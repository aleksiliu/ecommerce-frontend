import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
import type { Product } from '../types';


// Store to manage the cart's open state
export const $isCartOpen = atom<boolean>(false);

// Function to open the cart
export const openCart = () => {
  $isCartOpen.set(true);
};

// Function to close the cart
export const closeCart = () => {
  $isCartOpen.set(false);
};

// Create a persistent store for cart contents
export const $cart = persistentAtom<Product[]>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// Function to add a product to the cart
export const addToCart = (product: Product) => {
  const currentCart = $cart.get();
  const isAlreadyInCart = currentCart.some(item => item.id === product.id);

  if (!isAlreadyInCart) {
    $cart.set([...currentCart, product]);
  } 
};

// Function to remove a product from the cart
export const removeFromCart = (productId: number) => {
  const updatedCart = $cart.get().filter(item => item.id !== productId);
  $cart.set(updatedCart);
};

// Function to check if a product is in the cart
export const isInCart = (productId: number) => {
  return $cart.get().some(item => item.id === productId);
};
