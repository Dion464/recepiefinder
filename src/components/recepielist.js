"use client";
import React, { useContext } from "react";
import { SearchContext } from "../app/contex/searchContex";
import MealCard from "./mealCard";
const RecipeList = () => {
  const { recipes, randomMeals, error } = useContext(SearchContext);

  // Show error if there's an issue
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div>
      {/* Random Meal Suggestions */}
      <h2 className="text-2xl font-semibold mt-8">Suggested Meals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {randomMeals.length === 0 ? (
          <p>No random meals available.</p>
        ) : (
          randomMeals.map((recipe) => (
            <MealCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>

      {/* Search Results */}
      {recipes.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-8">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {recipes.map((recipe) => (
              <MealCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      )}

      {/* No recipes found message */}
      {recipes.length === 0 && !randomMeals.length && (
        <p className="text-center text-gray-500">No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
