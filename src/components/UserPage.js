import React, { useState } from 'react';
import { FaUserPlus, FaUserEdit, FaUserMinus, FaSearch, FaChevronLeft, FaUser, FaEnvelope, FaPhone, FaUserTag, FaBriefcase } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', contact: '1234567890', role: 'Admin', jobTitle: 'Manager' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', contact: '9876543210', role: 'User', jobTitle: 'Developer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', contact: '5555555555', role: 'Manager', jobTitle: 'Team Lead' },
];

const AddUserForm = ({ newUser, setNewUser, handleAddUser, setIsAddingUser }) => {
  const InputField = ({ icon, type, placeholder, value, onChange }) => (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );

  const SelectField = ({ icon, options, value, onChange, placeholder }) => (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {icon}
      </div>
      <select
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gray-100 z-50 overflow-auto">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10 sm:mt-4 sm:max-w-sm">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setIsAddingUser(false)}
            className="mr-4 p-2 hover:bg-gray-100 rounded-full transition duration-200"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">New User</h2>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleAddUser(); }}>
          <InputField
            icon={<FaUser className="text-gray-400" />}
            type="text"
            placeholder="User Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <InputField
            icon={<FaEnvelope className="text-gray-400" />}
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <InputField
            icon={<FaPhone className="text-gray-400" />}
            type="tel"
            placeholder="Contact"
            value={newUser.contact}
            onChange={(e) => setNewUser({ ...newUser, contact: e.target.value })}
          />
          <SelectField
            icon={<FaUserTag className="text-gray-400" />}
            options={['Admin', 'User', 'Manager']}
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            placeholder="Select a role"
          />
          <SelectField
            icon={<FaBriefcase className="text-gray-400" />}
            options={['Senior Partner', 'Junior Partner', 'Associate', 'Paralegal']}
            value={newUser.jobTitle}
            onChange={(e) => setNewUser({ ...newUser, jobTitle: e.target.value })}
            placeholder="Select a job title"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Save
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          An email with user invite to create password and login will be sent to the user.
        </p>
      </div>
    </div>
  );
};

const UserPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', contact: '', role: '', jobTitle: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', email: '', contact: '', role: '', jobTitle: '' });
    setIsAddingUser(false);
    alert('Email with user invite to create password and login will be sent to the user.');
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">User Management</h2>

        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-4 sm:mb-0 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-lg"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={() => setIsAddingUser(true)}
            className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded flex items-center"
          >
            <FaUserPlus className="mr-2" /> Add User
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.jobTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    <button onClick={() => setSelectedUser(user)} className="mr-2 p-2 text-green-600 hover:bg-green-50 rounded-full">
                      <FaUserEdit />
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(user.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    >
                      <FaUserMinus />
                    </button>
                    {showDeleteConfirm === user.id && (
                      <div className="ml-4 text-sm text-red-600">
                        <span>Are you sure? </span>
                        <button onClick={() => {
                          setUsers(users.filter(u => u.id !== user.id));
                          setShowDeleteConfirm(null);
                        }} className="underline">Yes</button> | <button onClick={() => setShowDeleteConfirm(null)} className="underline">No</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isAddingUser && (
          <AddUserForm
            newUser={newUser}
            setNewUser={setNewUser}
            handleAddUser={handleAddUser}
            setIsAddingUser={setIsAddingUser}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
