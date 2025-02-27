import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AdminPage from './pages/AdminPage';
import Navbar from './components/NavBar';
import Reporting from './pages/ReportingPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;