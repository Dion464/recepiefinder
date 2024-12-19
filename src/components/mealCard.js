"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import FavoritesButton from './favoritsButton';

const MealCard = ({ recipe, addToFavorites, removeFromFavorites }) => {
  const router = useRouter();

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{recipe.title}</h3>
      <p className="text-gray-600">{recipe.summary}</p>
      <button
        onClick={() => router.push(`/details/${recipe.id}`)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        View Details
      </button>
      <FavoritesButton
        recipe={recipe}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
};

export default MealCard;