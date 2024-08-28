import { atom } from 'nanostores';
import type { Product } from '../types';

// Initialize an empty favorites array as an atom
export const $favorites = atom<Product[]>([]);

// Function to add a product to favorites
export const addToFavorites = (product: Product) => {
  const currentFavorites = $favorites.get();

  // Check if the product is already in the favorites
  const isAlreadyFavorite = currentFavorites.some(fav => fav.id === product.id);

  if (!isAlreadyFavorite) {
    // If not already in favorites, add it
    $favorites.set([...currentFavorites, product]);
  } else {
    alert(`${product.title} is already in your favorites.`);
  }
};