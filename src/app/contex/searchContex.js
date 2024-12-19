"use client"
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          query: query,
          apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
        },
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <SearchContext.Provider value={{ recipes, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};