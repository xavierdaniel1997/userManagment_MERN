// SideNavbar.jsx
import React from 'react';

const SideNavbar = () => {
  return (
    <div className="w-64 bg-white text-black h-screen p-4 fixed top-0 left-0 shadow-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">FOOTFLEX</h1>
      </div>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="hover:bg-blue-500 hover:text-white hover:shadow-xl p-2 rounded transition duration-200">Dashboard</a>
        <a href="#" className="hover:bg-blue-500 hover:text-white hover:shadow-lg p-2 rounded transition duration-200">All Products</a>
        <a href="#" className="bg-blue-500 text-white shadow-lg p-2 rounded transition duration-200">Order List</a>
        <div>
          <h2 className="font-semibold mb-2">Categories</h2>
          {/* Add category links here */}
        </div>
      </nav>
    </div>
  );
};

export default SideNavbar;
