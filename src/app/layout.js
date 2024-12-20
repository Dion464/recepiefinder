"use client";
import React from "react";
import { SearchProvider } from "../app/contex/searchContex";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <div className="min-h-screen bg-gray-100">
            <header className="bg-white py-4">
              <div className="container mx-auto px-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Recipe Finder</h1>
              </div>
            </header>
            <main className="container mx-auto px-4 py-8">{children}</main>
            <footer className="bg-white py-4">
              <div className="container mx-auto px-4 text-center">
                &copy; {new Date().getFullYear()} Recipe Finder
              </div>
            </footer>
          </div>
        </SearchProvider>
      </body>
    </html>
  );
};

export default Layout;
