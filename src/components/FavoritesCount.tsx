import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $favorites } from '../stores/favoritesStore';

const FavoritesCount: React.FC = () => {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const favorites = useStore($favorites);

  useEffect(() => {
    setFavoritesCount(favorites.length);
  }, [favorites]);

  return (
    <div>
      {favoritesCount} Favorite{favoritesCount !== 1 ? 's' : ''}
    </div>
  );
};

export default FavoritesCount;
