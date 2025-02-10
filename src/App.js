import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import ProfessionalProfile from './pages/ProfessionalProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/professional/:id" element={<ProfessionalProfile />} />
      </Routes>
    </Router>
  );
}

export default App;