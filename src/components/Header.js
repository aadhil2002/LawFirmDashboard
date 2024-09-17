import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserCircle, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="/lejit_logo.png" alt="Lejit Logo" className="h-8 w-32 mr-4" />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="hover:text-blue-200 transition">Dashboard</Link>
          <Link to="/cases" className="hover:text-blue-200 transition">Cases</Link>
          <Link to="/tasks" className="hover:text-blue-200 transition">Tasks</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-xl hover:text-blue-200 transition relative">
            <FaBell />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
          <div className="relative">
            <button 
              className="text-xl hover:text-blue-200 transition flex items-center"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <FaUserCircle />
              <span className="ml-2 text-sm hidden sm:inline">John Doe</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaCog className="inline mr-2" />Settings
                </Link>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaSignOutAlt className="inline mr-2" />Sign out
                </button>
              </div>
            )}
          </div>
          <button 
            className="md:hidden text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <Link to="/dashboard" className="block py-2 hover:bg-blue-700">Dashboard</Link>
          <Link to="/cases" className="block py-2 hover:bg-blue-700">Cases</Link>
          <Link to="/tasks" className="block py-2 hover:bg-blue-700">Tasks</Link>
        </div>
      )}
    </header>
  );
};

export default Header;