// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Tours from './components/Tours';
import Contact from './components/Contact';
import PlanaTrip from './components/PlanaTrip';  // ✅ FIXED

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />

        {/* Plan a Trip Route */}
        <Route path="/plan-a-trip" element={<PlanaTrip />} />  // ✅ FIXED

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
