import { useRouter } from 'next/router';
import axios from 'axios';

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
          apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
        },
      })
        .then(response => setRecipe(response.data))
        .catch(error => console.error('Error fetching recipe details:', error));
    }
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover mt-4" />
      <p className="text-gray-600 mt-4">{recipe.summary}</p>
    </div>
  );
}