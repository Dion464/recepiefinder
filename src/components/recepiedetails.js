import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const RecipeDetails = () => {
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
        .then(res => setRecipe(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-auto" />
      <h2>Ingredients:</h2>
      <ul>
        {recipe.extendedIngredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {recipe.analyzedInstructions[0]?.steps.map(step => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;