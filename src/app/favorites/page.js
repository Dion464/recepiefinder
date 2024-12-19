import { useFavoritesStore } from '../store/favorites';
import RecipeList from '../components/RecipeList';

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div>
      <h1 className="text-2xl font-bold">Favorites</h1>
      <RecipeList recipes={favorites} />
    </div>
  );
}