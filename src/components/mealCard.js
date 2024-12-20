"use client";
import React from "react";

const MealCard = ({ recipe }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{recipe.title}</h3>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={() => alert(`More details for: ${recipe.title}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default MealCard;
