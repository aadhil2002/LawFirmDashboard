import React from 'react';
import { Link } from 'react-router-dom';
import { User, Plus, ChevronLeft } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 bg-opacity-80 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lg font-bold">PEARSON HARDMAN</h1>
        <ChevronLeft className="text-gray-500 cursor-pointer" size={20} onClick={toggleSidebar} />
      </div>
      <nav>
        <Link to="/profile" className="flex items-center mb-4 text-gray-400 hover:text-white">
          <User className="mr-3" size={20} />
          Law Firm Profile
        </Link>
        <Link to="/add-user-type" className="flex items-center mb-4 text-gray-400 hover:text-white">
          <Plus className="mr-3" size={20} />
          Add New User Type
        </Link>
        <Link to="/add-user" className="flex items-center mb-4 text-gray-400 hover:text-white">
          <Plus className="mr-3" size={20} />
          Add New User
        </Link>
        <Link to="/add-client" className="flex items-center mb-4 text-gray-400 hover:text-white">
          <Plus className="mr-3" size={20} />
          Add New Client
        </Link>
        <div className="mt-8">
          <h2 className="text-xs uppercase text-gray-600 mb-4">OTHERS</h2>
          <Link to="/settings" className="flex items-center mb-4 text-gray-400 hover:text-white">
            <User className="mr-3" size={20} />
            Settings
          </Link>
          <Link to="/payment" className="flex items-center mb-4 text-gray-400 hover:text-white">
            <User className="mr-3" size={20} />
            Payment
          </Link>
          <Link to="/accounts" className="flex items-center mb-4 text-gray-400 hover:text-white">
            <User className="mr-3" size={20} />
            Accounts
          </Link>
          <Link to="/help" className="flex items-center mb-4 text-gray-400 hover:text-white">
            <User className="mr-3" size={20} />
            Help
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;