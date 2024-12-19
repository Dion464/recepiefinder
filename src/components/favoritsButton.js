"use client";
import { useFavoritesStore } from "../app/store/favorite"

const FavoritesButton = ({ recipe }) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const handleToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <button onClick={handleToggle}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoritesButton;