import React, { useState } from 'react';
import { User, Briefcase, Mail, Phone, MapPin, Calendar, Save } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const InputField = ({ icon: Icon, label, type, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        placeholder={label}
      />
    </div>
  </div>
);

const AddClientPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    dateAdded: new Date().toISOString().split('T')[0],
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleChange = (field, value) => {
    setClientInfo(prevInfo => ({
      ...prevInfo,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the client info to your backend
    console.log('Client info submitted:', clientInfo);
    // Reset form or show success message
    // setClientInfo({ firstName: '', lastName: '', company: '', email: '', phone: '', address: '', dateAdded: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-white">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
          <div className="container mx-auto px-6 py-8">
            <div className="bg-white shadow rounded-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Add New Client</h1>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    icon={User}
                    label="First Name"
                    type="text"
                    value={clientInfo.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                  />
                  <InputField
                    icon={User}
                    label="Last Name"
                    type="text"
                    value={clientInfo.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                  />
                  <InputField
                    icon={Briefcase}
                    label="Company"
                    type="text"
                    value={clientInfo.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                  />
                  <InputField
                    icon={Mail}
                    label="Email"
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  <InputField
                    icon={Phone}
                    label="Phone"
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                  <InputField
                    icon={MapPin}
                    label="Address"
                    type="text"
                    value={clientInfo.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                  />
                  <InputField
                    icon={Calendar}
                    label="Date Added"
                    type="date"
                    value={clientInfo.dateAdded}
                    onChange={(e) => handleChange('dateAdded', e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Save className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
                    Save Client
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AddClientPage;