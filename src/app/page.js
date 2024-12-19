"use client";
import { useState } from 'react';
import SearchBar from '@/components/searchbar';
import RecipeList from '@/components/recepielist';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (searchResults) => {
    setRecipes(searchResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
}