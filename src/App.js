import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import UserPage from './components/UserPage';

function App() {
  return (
    <Router>
    <Routes>
      {/* Dashboard Route */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/users" element={<UserPage />} />
      </Routes>
      </Router>
  );
}

export default App;
