import { persistentAtom } from '@nanostores/persistent';
import type { Product } from '../types';

// Create a persistent store for favorites
export const $favorites = persistentAtom<Product[]>('favorites', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// Function to add a product to favorites
export const addToFavorites = (product: Product) => {
  const currentFavorites = $favorites.get();

  // Check if the product is already in the favorites
  const isAlreadyFavorite = currentFavorites.some(fav => fav.id === product.id);

  if (!isAlreadyFavorite) {
    $favorites.set([...currentFavorites, product]);
  } else {
    alert(`${product.title} is already in your favorites.`);
  }
};

// Function to check if a product is in favorites
export const isFavorite = (productId: number) => {
  return $favorites.get().some(fav => fav.id === productId);
};

