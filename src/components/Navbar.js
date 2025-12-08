import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/520/856/original/letter-k-logo-initial-with-circle-shape-swoosh-alphabet-logotype-simple-and-minimalist-free-vector.jpg"
        width="60"
        alt="logo"
      />
      <Link to="/about">About</Link>
      <Link to="/tours">Tours</Link>
      <Link to="/contact">Contact</Link>
      <button className="btn">
        <Link to="/plan-a-trip">Plan a Trip</Link>
 {/* ✅ Correct route */}
      </button>
    </div>
  );
};

export default Navbar;