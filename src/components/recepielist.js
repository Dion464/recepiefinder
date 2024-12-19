const RecipeList = ({ recipes }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded shadow">
            <h2>{recipe.title}</h2>
            <p>{recipe.summary}</p>
            <a href={`/recipe/${recipe.id}`}>View Details</a>
          </div>
        ))}
      </div>
    );
  };
  
  export default RecipeList;