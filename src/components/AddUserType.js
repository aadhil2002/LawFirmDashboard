import React, { useState } from 'react';
import { UserPlus, Check, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

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

const AddUserType = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userTypes, setUserTypes] = useState([
    { id: 1, name: 'Admin', description: 'Full access to all features' },
    { id: 2, name: 'User', description: 'Limited access to features' },
    { id: 3, name: 'Manager', description: 'Access to team management features' },
  ]);
  const [newUserType, setNewUserType] = useState({ name: '', description: '' });
  const [isAddingUserType, setIsAddingUserType] = useState(false);
  const [editingUserType, setEditingUserType] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleAddUserType = () => {
    if (newUserType.name && newUserType.description) {
      setUserTypes([...userTypes, { ...newUserType, id: userTypes.length + 1 }]);
      setNewUserType({ name: '', description: '' });
      setIsAddingUserType(false);
    }
  };

  const handleUpdateUserType = () => {
    if (editingUserType) {
      setUserTypes(userTypes.map(ut => ut.id === editingUserType.id ? editingUserType : ut));
      setEditingUserType(null);
    }
  };

  const handleDeleteUserType = (id) => {
    setUserTypes(userTypes.filter(ut => ut.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-white">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Add User Type</h3>

            <div className="mt-8">
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsAddingUserType(true)}
                  className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded flex items-center"
                >
                  <UserPlus className="mr-2" size={18} /> Add User Type
                </button>
              </div>

              {isAddingUserType && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">New User Type</h4>
                  <InputField
                    icon={UserPlus}
                    type="text"
                    placeholder="User Type Name"
                    value={newUserType.name}
                    onChange={(e) => setNewUserType({ ...newUserType, name: e.target.value })}
                  />
                  <InputField
                    icon={UserPlus}
                    type="text"
                    placeholder="User Type Description"
                    value={newUserType.description}
                    onChange={(e) => setNewUserType({ ...newUserType, description: e.target.value })}
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={handleAddUserType}
                      className="bg-green-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsAddingUserType(false)}
                      className="bg-red-500 text-white hover:bg-red-600 font-bold py-2 px-4 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userTypes.map((userType) => (
                      <tr key={userType.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {editingUserType && editingUserType.id === userType.id ? (
                            <input
                              type="text"
                              value={editingUserType.name}
                              onChange={(e) => setEditingUserType({ ...editingUserType, name: e.target.value })}
                              className="w-full p-1 border rounded"
                            />
                          ) : (
                            <p className="text-gray-900 whitespace-no-wrap">{userType.name}</p>
                          )}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {editingUserType && editingUserType.id === userType.id ? (
                            <input
                              type="text"
                              value={editingUserType.description}
                              onChange={(e) => setEditingUserType({ ...editingUserType, description: e.target.value })}
                              className="w-full p-1 border rounded"
                            />
                          ) : (
                            <p className="text-gray-900 whitespace-no-wrap">{userType.description}</p>
                          )}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {editingUserType && editingUserType.id === userType.id ? (
                            <div className="flex items-center">
                              <button
                                onClick={handleUpdateUserType}
                                className="text-green-600 hover:text-green-900 mr-2"
                              >
                                <Check size={18} />
                              </button>
                              <button
                                onClick={() => setEditingUserType(null)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <X size={18} />
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <button
                                onClick={() => setEditingUserType(userType)}
                                className="text-blue-600 hover:text-blue-900 mr-2"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteUserType(userType.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Delete
                              </button>
                            </div>
                          )}
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
    </div>
  );
};

export default AddUserType;