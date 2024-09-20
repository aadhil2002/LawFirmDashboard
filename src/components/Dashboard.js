import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [metrics, setMetrics] = useState({
    openCases: 5,
    appointmentRequests: 10,
    pendingAppointments: 8
  });

  useEffect(() => {
    fetchData(selectedDate);
  }, [selectedDate]);

  const fetchData = async (date) => {
    // Simulating API call to fetch dynamic data
    setMetrics({
      openCases: Math.floor(Math.random() * 10) + 1,
      appointmentRequests: Math.floor(Math.random() * 15) + 5,
      pendingAppointments: Math.floor(Math.random() * 12) + 3
    });
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const selectDate = (day) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate);
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);

    for (let i = 0; i < startDay; i++) {
      days.push(<td key={`empty-${i}`} className="p-2"></td>);
    }

    for (let i = 1; i <= totalDays; i++) {
      const isSelected = i === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth() && currentDate.getFullYear() === selectedDate.getFullYear();
      days.push(
        <td key={`day-${i}`} 
            className={`p-2 text-center ${isSelected ? 'bg-blue-600 text-white rounded-full' : 'hover:bg-gray-600'} cursor-pointer`}
            onClick={() => selectDate(i)}>
          {i}
        </td>
      );
    }

    const rows = [];
    let cells = [];

    days.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(<tr key={i}>{cells}</tr>);
        cells = [];
        cells.push(day);
      }
      if (i === days.length - 1) {
        rows.push(<tr key={i}>{cells}</tr>);
      }
    });

    return rows;
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white" style={{ backgroundImage: "url('/lawfirm.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`flex-1 p-4 md:p-8 overflow-auto transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-16">LEJIT.AI</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8">
            {/* Metrics */}
            <div className="bg-gray-800 bg-opacity-80 rounded-lg p-10 relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-6 left-6 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold">{metrics.openCases}</span>
              </div>
              <p className="text-gray-400 uppercase text-right text-xl mr-6">OPEN CASES</p>
              <ChevronRight className="absolute bottom-6 right-6 cursor-pointer" size={28} />
            </div>
            <div className="bg-gray-800 bg-opacity-80 rounded-lg p-10 relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-6 left-6 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold">{metrics.appointmentRequests}</span>
              </div>
              <p className="text-gray-400 uppercase text-right text-xl mr-6">APPOINTMENT REQUESTS</p>
              <ChevronRight className="absolute bottom-6 right-6 cursor-pointer" size={28} />
            </div>
            <div className="bg-gray-800 bg-opacity-80 rounded-lg p-10 relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-6 left-6 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold">{metrics.pendingAppointments}</span>
              </div>
              <p className="text-gray-400 uppercase text-right text-xl mr-6">PENDING APPOINTMENTS</p>
              <ChevronRight className="absolute bottom-6 right-6 cursor-pointer" size={28} />
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-gray-800 bg-opacity-80 rounded-lg p-8 md:p-16 shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <button className="text-gray-400 hover:text-white" onClick={prevMonth}>
                <ChevronLeft size={28} />
              </button>
              <h2 className="text-2xl md:text-4xl font-bold">{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
              <button className="text-gray-400 hover:text-white" onClick={nextMonth}>
                <ChevronRight size={28} />
              </button>
            </div>
            <table className="w-full text-center">
              <thead>
                <tr className="text-gray-400">
                  <th className="p-2">Sun</th>
                  <th className="p-2">Mon</th>
                  <th className="p-2">Tue</th>
                  <th className="p-2">Wed</th>
                  <th className="p-2">Thu</th>
                  <th className="p-2">Fri</th>
                  <th className="p-2">Sat</th>
                </tr>
              </thead>
              <tbody>{renderCalendar()}</tbody>
            </table>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;