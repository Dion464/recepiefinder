"use client";
import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../app/contex/searchContex";
const SearchBar = () => {
  const { handleSearch } = useContext(SearchContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleSearch(query);
    }, 500);

    return () => clearTimeout(debounce);
  }, [query, handleSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for recipes..."
      className="border p-2 rounded-md w-full"
    />
  );
};

export default SearchBar;
