import React, { useState } from 'react';
import { ChevronDown, Plus, Users, MessageSquare, Bell, MoreHorizontal, Calendar, PhoneCall, Search, ChevronRight, Wand2 } from 'lucide-react';

const Header = ({ selectedFirm }) => (
  <header className="bg-[#0F1535] p-4 flex justify-between items-center text-white">
    <div className="w-1/3 flex items-center">
      <Search size={20} className="text-white mr-4" />
    </div>
    <div className="flex justify-center w-1/3">
      <img src="/lejit_logo.png" alt="Lejit.ai logo" className="h-10" />
    </div>
    <nav className="w-1/3">
      <ul className="flex justify-end space-x-6 text-sm">
        <li>About us</li>
        <li>Catalogue</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

const Sidebar = ({ selectedFirm }) => (
  <aside className="w-64 bg-slate-300 p-6 text-[#0F1535]">
    <div className="mb-8">
      <button className="flex items-center bg-[#1C2541] px-4 py-2 rounded text-sm w-full text-white">
        {selectedFirm} <ChevronDown className="ml-2" size={16} />
      </button>
    </div>
    <nav>
      <ul className="space-y-4">
        <li className="flex items-center justify-between text-[#4C7BF4]">
          <div className="flex items-center">
            <span className="mr-2">•</span>
            <span>My Cases</span>
          </div>
          <Plus size={16} />
        </li>
        <li className="flex items-center justify-between text-[#4C7BF4]">
          <div className="flex items-center">
            <span className="mr-2">•</span>
            <span>My Tasks</span>
          </div>
          <Plus size={16} />
        </li>
        <li className="flex items-center">
          <span className="mr-2">•</span>
          <span>Manage Appointments</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2">•</span>
          <span>Legal Templates</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2">•</span>
          <span>Knowledge Hub</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2">•</span>
          <span>My Clients</span>
        </li>
      </ul>
    </nav>
  </aside>
);

const Metrics = ({ metrics }) => (
  <div className="grid grid-cols-3 gap-6 mb-8">
    {metrics.map((metric, index) => (
      <div key={index} className="bg-[#EDF3FF] p-6 rounded-lg relative">
        <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-[#4C7BF4]">{metric.value}</span>
        </div>
        <p className="text-[#4C7BF4] text-right text-lg mt-20 pr-6">{metric.label}</p>
        <ChevronRight className="absolute bottom-6 right-6 text-[#4C7BF4]" size={24} />
      </div>
    ))}
  </div>
);

const Table = ({ title, data, columns }) => (
  <div className="bg-[#EDF3FF] p-6 rounded-lg mb-8">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-bold text-[#0F1535]">{title}</h3>
      <button className="text-[#4C7BF4] text-sm">View All</button>
    </div>
    <table className="w-full">
      <thead>
        <tr className="text-[#4C7BF4] text-sm">
          {columns.map((column, index) => (
            <th key={index} className="text-left pb-4">{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-t border-gray-200">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="py-4 text-[#0F1535]">
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PendingAppointments = ({ appointments }) => (
  <div className="bg-[#EDF3FF] p-6 rounded-lg mb-8">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-bold text-[#0F1535]">PENDING APPOINTMENTS</h3>
      <button className="text-[#4C7BF4] text-sm">View All</button>
    </div>
    <div className="grid grid-cols-2 gap-6">
      {appointments.map((appointment, index) => (
        <div key={index} className="bg-white p-4 rounded-lg">
          <div className="flex items-center mb-4 text-sm text-[#4C7BF4]">
            <Calendar size={16} className="mr-2" />
            <span>{appointment.date}</span>
          </div>
          <div className="flex items-center mb-4">
            <img src="/api/placeholder/40/40" alt={appointment.clientName} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h4 className="font-bold text-[#0F1535]">{appointment.clientName}</h4>
              <p className="text-sm text-[#4C7BF4]">{appointment.caseType}</p>
            </div>
          </div>
          <p className="text-sm mb-4 text-[#0F1535]">{appointment.description}</p>
          <div className="flex justify-between">
            <button className="bg-gray-200 px-4 py-2 rounded text-sm text-[#0F1535]">DECLINE</button>
            <button className="bg-[#4C7BF4] px-4 py-2 rounded text-sm text-white">ACCEPT</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LegalTemplates = ({ templates }) => (
  <div className="bg-[#EDF3FF] p-6 rounded-lg">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-bold text-[#0F1535]">LEGAL TEMPLATES</h3>
      <button className="text-[#4C7BF4] text-sm">View All</button>
    </div>
    <div className="grid grid-cols-3 gap-6">
      {templates.map((template, index) => (
        <div key={index} className="bg-white p-4 rounded-lg">
          <img src="/api/placeholder/48/64" alt="Document icon" className="mb-2" />
          <h4 className="text-sm text-[#0F1535]">{template.name}</h4>
        </div>
      ))}
    </div>
  </div>
);

const AskAI = () => (
  <div className="bg-[#4C7BF4] p-4 rounded-lg mb-8">
    <h3 className="text-xl font-bold mb-2 text-white flex items-center">
      <Wand2 className="mr-2" size={24} />
      Ask AI
    </h3>
    <div className="grid grid-cols-1 gap-4 text-sm">
      <button className="bg-[#6B8FF8] px-3 py-2 rounded-lg text-white">Draft Templates</button>
      <button className="bg-[#6B8FF8] px-3 py-2 rounded-lg text-white">Get Citation Summary</button>
      <button className="bg-[#6B8FF8] px-3 py-2 rounded-lg text-white">Find Similar Documents</button>
    </div>
  </div>
);

const Dashboard = () => {
  const [selectedFirm, setSelectedFirm] = useState('PEARSON HARDMAN');

  const metrics = [
    { label: 'Open Cases', value: 5 },
    { label: 'Appointment Requests', value: 10 },
    { label: 'Pending Appointments', value: 8 },
  ];

  const courtHearings = [
    { clientName: 'Sankar Das', matter: 'Land Dispute Case', date: '29/09/2024 2.00 - 4.00', court: 'High Court' },
    { clientName: 'Liya Abraham', matter: 'Land Dispute Case', date: '29/09/2024 2.00 - 4.00', court: 'Supreme Court' },
    { clientName: 'Leo Das', matter: 'Land Dispute Case', date: '29/09/2024 2.00 - 4.00', court: 'High Court' },
  ];

  const courtHearingsColumns = [
    {
      key: 'clientName', label: 'Client Name', render: (row) => (
        <div className="flex items-center">
          <img src="/api/placeholder/32/32" alt={row.clientName} className="w-8 h-8 rounded-full mr-3" />
          {row.clientName}
        </div>
      )
    },
    { key: 'matter', label: 'Matter' },
    { key: 'date', label: <Calendar size={16} /> },
    { key: 'court', label: 'Court' },
    { key: 'contact', label: 'Contact', render: () => <PhoneCall size={16} className="text-[#4C7BF4]" /> },
  ];

  const clientAppointments = [
    { clientName: 'Sivan Prakash', matter: 'Family Dispute Case', date: '29/09/2024 2.00 - 4.00', location: 'Kochi, Kerala' },
    { clientName: 'Susan Mathews', matter: 'Land Dispute Case', date: '29/09/2024 2.00 - 4.00', location: 'Thrissur, Kerala' },
    { clientName: 'Harikrishnan VV', matter: 'Land Dispute Case', date: '29/09/2024 2.00 - 4.00', location: 'Kollam, Kerala' },
  ];

  const clientAppointmentsColumns = [
    {
      key: 'clientName', label: 'Client Name', render: (row) => (
        <div className="flex items-center">
          <img src="/api/placeholder/32/32" alt={row.clientName} className="w-8 h-8 rounded-full mr-3" />
          {row.clientName}
        </div>
      )
    },
    { key: 'matter', label: 'Matter' },
    { key: 'date', label: <Calendar size={16} /> },
    { key: 'location', label: 'Location' },
    { key: 'contact', label: 'Contact', render: () => <PhoneCall size={16} className="text-[#4C7BF4]" /> },
  ];

  const pendingAppointments = [
    {
      date: '22nd August, 2:00 pm - 4:00 pm',
      clientName: 'John Doe',
      caseType: 'Family Dispute Case',
      description: 'The client was charged with multiple counts of fraud and faced significant prison time. The Client...',
    },
    {
      date: '31st September, 4:00 pm - 6:00 pm',
      clientName: 'Alice Mary',
      caseType: 'Land Dispute Case',
      description: 'The client was charged with multiple counts of fraud and faced significant prison time. The Client...',
    },
  ];

  const openTasks = [
    { task: 'Draft Affidavit', matter: 'Family Dispute Case', date: '22/09/2024', client: 'Liya Abraham', assignees: 3 },
    { task: 'Conduct Data Research', matter: 'Land Dispute Case', date: '23/09/2024', client: 'Leo Das', assignees: 3 },
    { task: "Contact convict's neighbors", matter: 'Land Dispute Case', date: '25/09/2024', client: 'Leo Das', assignees: 3 },
  ];

  const openTasksColumns = [
    { key: 'task', label: 'Task' },
    { key: 'matter', label: 'Matter' },
    { key: 'date', label: <Calendar size={16} /> },
    {
      key: 'client', label: 'Client', render: (row) => (
        <div className="flex items-center">
          <img src="/api/placeholder/32/32" alt={row.client} className="w-8 h-8 rounded-full mr-3" />
          {row.client}
        </div>
      )
    },
    {
      key: 'assignees', label: 'Assignees', render: (row) => (
        <div className="flex">
          {[...Array(row.assignees)].map((_, i) => (
            <img key={i} src="/api/placeholder/32/32" alt="Assignee" className="w-8 h-8 rounded-full -ml-2 first:ml-0" />
          ))}
        </div>
      )
    },
  ];

  const legalTemplates = [
    { name: 'Property Case Template' },
    { name: 'Land Case Template' },
    { name: 'Family Case Template' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F1535]">
      <Header selectedFirm={selectedFirm} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar selectedFirm={selectedFirm} />
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Hey John 👋</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#EDF3FF] px-4 py-2 rounded-full pl-10 text-sm text-[#0F1535]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4C7BF4]" size={20} />
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">MY DASHBOARD</h2>
              <div className="flex space-x-8 mb-8">
                <div className="flex-1">
                  <Metrics metrics={metrics} />
                </div>
                <div className="w-64">
                  <AskAI />
                </div>
              </div>
              <Table title="COURT HEARINGS" data={courtHearings} columns={courtHearingsColumns} />
              <Table title="CLIENT APPOINTMENTS" data={clientAppointments} columns={clientAppointmentsColumns} />
              <PendingAppointments appointments={pendingAppointments} />
              <Table title="OPEN TASKS" data={openTasks} columns={openTasksColumns} />
              <LegalTemplates templates={legalTemplates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;