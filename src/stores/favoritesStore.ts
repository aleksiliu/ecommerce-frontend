import { atom } from 'nanostores';
import type { Product } from '../types';

// Initialize an empty favorites array as an atom
export const $favorites = atom<Product[]>([]);

// Function to add a product to favorites
export const addToFavorites = (product: Product) => {
  $favorites.set([...$favorites.get(), product]);
};