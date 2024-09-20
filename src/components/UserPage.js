import React, { useState } from 'react';
import { UserPlus, UserMinus, UserCheck, Search } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', contact: '1234567890', role: 'Admin', jobTitle: 'Manager' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', contact: '9876543210', role: 'User', jobTitle: 'Developer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', contact: '5555555555', role: 'Manager', jobTitle: 'Team Lead' },
];

const InputField = ({ icon: Icon, type, placeholder, value, onChange }) => (
  <div className="relative mb-4">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <Icon className="text-gray-400" size={18} />
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

const SelectField = ({ icon: Icon, options, value, onChange, placeholder }) => (
  <div className="relative mb-4">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <Icon className="text-gray-400" size={18} />
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

const AddUserForm = ({ newUser, setNewUser, handleAddUser, setIsAddingUser }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setIsAddingUser(false)}
            className="mr-4 p-2 hover:bg-gray-100 rounded-full transition duration-200"
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">New User</h2>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleAddUser(); }}>
          <InputField
            icon={UserCheck}
            type="text"
            placeholder="User Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <InputField
            icon={UserCheck}
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <InputField
            icon={UserCheck}
            type="tel"
            placeholder="Contact"
            value={newUser.contact}
            onChange={(e) => setNewUser({ ...newUser, contact: e.target.value })}
          />
          <SelectField
            icon={UserCheck}
            options={['Admin', 'User', 'Manager']}
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            placeholder="Select a role"
          />
          <SelectField
            icon={UserCheck}
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

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState(initialUsers);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', contact: '', role: '', jobTitle: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
    <div className="flex flex-col min-h-screen bg-gray-100 text-white">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>

            <div className="mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <Search className="h-5 w-5 text-gray-400" />
                    </span>
                    <input
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                      type="text"
                      placeholder="Search users"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  onClick={() => setIsAddingUser(true)}
                  className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded flex items-center"
                >
                  <UserPlus className="mr-2" size={18} /> Add User
                </button>
              </div>

              <div className="mt-8 bg-white shadow rounded-lg overflow-x-auto">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Job Title
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.contact}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.jobTitle}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <button className="text-blue-600 hover:text-blue-900 mr-2">
                              <UserCheck size={18} />
                            </button>
                            <button
                              onClick={() => setShowDeleteConfirm(user.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <UserMinus size={18} />
                            </button>
                            {showDeleteConfirm === user.id && (
                              <div className="ml-2 text-sm text-red-600">
                                <span>Are you sure? </span>
                                <button
                                  onClick={() => {
                                    setUsers(users.filter((u) => u.id !== user.id));
                                    setShowDeleteConfirm(null);
                                  }}
                                  className="underline"
                                >
                                  Yes
                                </button>{' '}
                                |{' '}
                                <button onClick={() => setShowDeleteConfirm(null)} className="underline">
                                  No
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />

      {isAddingUser && (
        <AddUserForm
          newUser={newUser}
          setNewUser={setNewUser}
          handleAddUser={handleAddUser}
          setIsAddingUser={setIsAddingUser}
        />
      )}
    </div>
  );
};

export default Dashboard;