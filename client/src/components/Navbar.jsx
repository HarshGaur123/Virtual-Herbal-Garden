
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ user, handleLogout }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
      <Link to="/" className="nav-logo">
        <img src="https://thumbs.dreamstime.com/b/herbal-logo-template-vector-icon-herbal-logo-template-vector-icon-illustration-147901981.jpg" alt="Logo" className="logo-image" />
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        {user ? (
          <>
            <span className="nav-link" style={{ color: "red" }}>Hello User {user.fullName}</span>
            <button onClick={handleLogout} className="nav-link">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">User Login</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </>
        )}
      </div>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <div className="nav-links-mobile">
        <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/services" className="nav-link" onClick={toggleMobileMenu}>Services</Link>
        <Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
        {user ? (
          <>
            <span className="nav-link" style={{ color: "red" }}>Hello User {user.fullName}</span>
            <button onClick={() => { handleLogout(); toggleMobileMenu(); }} className="nav-link">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link" onClick={toggleMobileMenu}>User Login</Link>
            <Link to="/signup" className="nav-link" onClick={toggleMobileMenu}>Sign Up</Link>
            
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
