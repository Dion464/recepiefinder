import React from "react";
import { SearchProvider } from "../app/contex/searchContex";
import SearchBar from "../components/searchbar";
import RecipeList from "../components/recepielist";

const Page = () => {
  return (
    <SearchProvider>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center">Meal Finder</h1>
        <SearchBar />
        <RecipeList />
      </div>
    </SearchProvider>
  );
};

export default Page;
