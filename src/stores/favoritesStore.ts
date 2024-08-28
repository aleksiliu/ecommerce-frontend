import { atom } from 'nanostores';
import type { Product } from '../types';

// Initialize an empty cart as an atom
export const $favorites = atom<Product[]>([]);

// Function to add a product to the cart
export const addToFavorites = (product: Product) => {
  $favorites.set([...$favorites.get(), product]);
};