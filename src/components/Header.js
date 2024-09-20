import React from 'react';
import { Menu, Plus, Home, Users, MessageCircle, Bell, Grid, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 bg-opacity-80">
      <div className="flex space-x-4">
        <Menu className="cursor-pointer" size={24} onClick={toggleSidebar} />
        <Plus size={24} className="cursor-pointer" />
        <Link to="/" className="flex items-center mb-4 hover:text-white">
        <Home size={24} className="cursor-pointer" />
        </Link>
        <Users size={24} className="hidden sm:block cursor-pointer" />
        <MessageCircle size={24} className="hidden sm:block cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
        <Bell size={24} className="cursor-pointer" />
        <Grid size={24} className="hidden sm:block cursor-pointer" />
        <User size={24} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;