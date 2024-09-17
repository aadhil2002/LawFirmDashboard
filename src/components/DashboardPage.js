import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield, FaUsers, FaBriefcase, FaTasks, FaSearch, FaFileAlt } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from './Header';
import Footer from './Footer';

// Sample data
const sampleData = {
  totalCases: 45,
  totalAssignments: 12,
  totalTasks: 34,
};

const chartData = [
  { name: 'Jan', cases: 20 },
  { name: 'Feb', cases: 30 },
  { name: 'Mar', cases: 25 },
  { name: 'Apr', cases: 40 },
  { name: 'May', cases: 35 },
  { name: 'Jun', cases: 45 },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'widgets':
        return renderWidgets();
      case 'chart':
        return renderChart();
      default:
        return renderOverview();
    }
  };

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {renderStatCard('Total Cases', sampleData.totalCases, <FaBriefcase />)}
      {renderStatCard('Total Assignments', sampleData.totalAssignments, <FaUserShield />)}
      {renderStatCard('Total Tasks', sampleData.totalTasks, <FaTasks />)}
    </div>
  );

  const renderStatCard = (title, value, icon) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex items-center justify-between transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div>
        <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
        <p className="text-3xl font-bold text-blue-900">{value}</p>
      </div>
      <div className="text-blue-600 text-6xl">{icon}</div>
    </div>
  );

  const renderWidgets = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {renderWidget('Roles', 'Manage user roles and permissions', <FaUserShield />, '/roles')}
      {renderWidget('Users', 'View and manage users', <FaUsers />, '/users')}
      {renderWidget('Cases', 'Overview of all cases', <FaBriefcase />, '/cases')}
      {renderWidget('Tasks', 'Track and manage tasks', <FaTasks />, '/tasks')}
      {renderWidget('Case Management System', 'Manage case details efficiently', <FaSearch />, '/case-management')}
      {renderWidget('Case Citation Analysis', 'Analyze case citations effectively', <FaFileAlt />, '/citation-analysis')}
    </div>
  );

  const renderWidget = (title, description, icon, link) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="text-blue-600 text-4xl mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <Link to={link} className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 inline-block text-center hover:bg-blue-700 transition">
        View {title}
      </Link>
    </div>
  );

  const renderChart = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Case Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cases" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Dashboard</h2>
        
        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('widgets')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'widgets' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            >
              Widgets
            </button>
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'chart' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            >
              Chart
            </button>
          </div>
        </div>

        {renderTabContent()}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;