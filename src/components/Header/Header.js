import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="header" role="banner">
      <nav
        className="nav-container"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="logo">
          <Link to="/" aria-label="Little Lemon Restaurant - Home">
            <img
              src="/logo.png"
              alt="Little Lemon Restaurant Logo"
              width="200"
              height="40"
            />
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-icon">☰</span>
        </button>

        <ul
          className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}
          id="mobile-menu"
        >
          <li>
            <Link
              to="/"
              className={isActive("/")}
              onClick={closeMobileMenu}
              aria-label="Go to Home page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={isActive("/menu")}
              onClick={closeMobileMenu}
              aria-label="View our menu"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className={isActive("/booking")}
              onClick={closeMobileMenu}
              aria-label="Book a table"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact")}
              onClick={closeMobileMenu}
              aria-label="Contact us"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
