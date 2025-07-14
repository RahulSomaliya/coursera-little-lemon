import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Little Lemon</h3>
          <p>Bringing the taste of the Mediterranean to Chicago since 2023.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav aria-label="Footer navigation">
            <ul>
              <li>
                <Link to="/" aria-label="Go to Home page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" aria-label="View menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/booking" aria-label="Book a table">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/contact" aria-label="Contact us">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <address>
            <p>123 Main Street</p>
            <p>Chicago, IL 60601</p>
            <p>
              <a href="tel:+13125551234" aria-label="Call restaurant">
                (312) 555-1234
              </a>
            </p>
            <p>
              <a
                href="mailto:info@littlelemon.com"
                aria-label="Email restaurant"
              >
                info@littlelemon.com
              </a>
            </p>
          </address>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <dl className="hours-list-footer">
            <dt>Monday - Thursday</dt>
            <dd>5:00 PM - 10:00 PM</dd>

            <dt>Friday - Saturday</dt>
            <dd>5:00 PM - 11:00 PM</dd>

            <dt>Sunday</dt>
            <dd>4:00 PM - 9:00 PM</dd>
          </dl>{" "}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
