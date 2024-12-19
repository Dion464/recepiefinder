import React from 'react';
import SearchBar from '@/components/searchbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white py-4 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Recipe Finder</h1>
          </div>
          <SearchBar />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white py-4">
        <div className="container mx-auto px-4">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;