
import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <div className="w-10/12 flex justify-end items-center py-4 px-7 bg-white shadow-sm fixed top-0 left-1/5">
      
      <div className="flex items-center space-x-4">
        <div className="relative flex">
          <input type="text" placeholder="Search..." className="p-2 border rounded pr-10" />
          <FaSearch className="absolute top-3 right-2 text-gray-500" />
        </div>
        <div className="relative">
          <button className="p-2 bg-gray-100 rounded flex items-center space-x-2">
            <FaUser />
            <span>Admin</span>
          </button>
          {/* Dropdown menu here */}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
