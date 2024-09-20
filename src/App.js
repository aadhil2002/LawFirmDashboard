import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserPage from './components/UserPage';
import AddUserType from './components/AddUserType';
import LawFirmProfile from './components/Profile';
import AddClientPage from './components/AddClientPage';

function App() {
  return (
    <Router>
    <Routes>
      {/* Dashboard Route */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-user" element={<UserPage />} />
      <Route path="/add-user-type" element={<AddUserType />} />
      <Route path='/profile' element={<LawFirmProfile/>}/>
      <Route path='/add-client' element={<AddClientPage/>}/>
      </Routes>
      </Router>
  );
}

export default App;
