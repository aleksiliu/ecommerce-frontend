import React from 'react';
import { useStore } from '@nanostores/react';
import { $favorites } from '../stores/favoritesStore';

const FavoritesCount: React.FC = () => {
  const cart = useStore($favorites); 

  return (
    <div>
      Favorites: {cart.length} 
    </div>
  );
};

export default FavoritesCount;
