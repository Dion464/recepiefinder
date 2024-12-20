"use client";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  const handleSearch = async (query) => {
    if (!query) {
      // Fetch random recipes if no query is provided
      fetchRandomMeals();
    } else {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          {
            params: {
              query: query,
              apiKey: apiKey,
            },
          }
        );
        setRecipes(response.data.results || []);
        setError(null); // Clear previous error
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch recipes.");
      }
    }
  };

  const fetchRandomMeals = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random",
        {
          params: {
            number: 5, // Number of random recipes to fetch
            apiKey: apiKey,
          },
        }
      );
      setRandomMeals(response.data.recipes || []);
      setError(null); // Clear previous error
    } catch (err) {
      console.error("Error fetching random recipes:", err);
      setError("Failed to fetch random recipes.");
    }
  };

  useEffect(() => {
    fetchRandomMeals(); // Fetch random meals on component mount
  }, []);

  return (
    <SearchContext.Provider
      value={{ recipes, randomMeals, error, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
