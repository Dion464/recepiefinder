import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const FavoritesContext = createContext();

// Custom hook to use the context
export const useFavoritesStore = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritesStore must be used within FavoritesProvider');
  }
  return context;
};

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('favorite_')) {
        const recipe = JSON.parse(localStorage.getItem(key));
        storedFavorites.push(recipe);
      }
    }
    return storedFavorites;
  });

  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    localStorage.setItem(`favorite_${recipe.id}`, JSON.stringify(recipe));
  };

  const removeFavorite = (recipeId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== recipeId));
    localStorage.removeItem(`favorite_${recipeId}`);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// The Favorites component that displays the list
const Favorites = () => {
  const { favorites } = useFavoritesStore();

  return (
    <div>
      <h1 className="text-2xl font-bold">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded shadow-md">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;