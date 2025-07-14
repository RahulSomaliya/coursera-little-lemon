import React, { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import "./ContactPage.css";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-label="Contact page header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </section>

      <div className="contact-container">
        <div
          className="contact-tabs"
          role="tablist"
          aria-label="Contact information tabs"
        >
          <button
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
            role="tab"
            aria-selected={activeTab === "info"}
            aria-controls="info-panel"
          >
            Restaurant Info
          </button>
          <button
            className={`tab-button ${activeTab === "form" ? "active" : ""}`}
            onClick={() => setActiveTab("form")}
            role="tab"
            aria-selected={activeTab === "form"}
            aria-controls="form-panel"
          >
            Send Message
          </button>
        </div>

        {activeTab === "info" && (
          <div
            id="info-panel"
            role="tabpanel"
            className="contact-info-section"
            aria-label="Restaurant information"
          >
            <div className="info-grid">
              <div className="info-card">
                <h2>Visit Us</h2>
                <address>
                  <p>123 Main Street</p>
                  <p>Chicago, IL 60601</p>
                  <p>United States</p>
                </address>
              </div>

              <div className="info-card">
                <h2>Hours of Operation</h2>
                <dl className="hours-list">
                  <dt>Monday - Thursday</dt>
                  <dd>5:00 PM - 10:00 PM</dd>

                  <dt>Friday - Saturday</dt>
                  <dd>5:00 PM - 11:00 PM</dd>

                  <dt>Sunday</dt>
                  <dd>4:00 PM - 9:00 PM</dd>
                </dl>
                <p className="special-hours">
                  <em>Closed on major holidays</em>
                </p>
              </div>

              <div className="info-card">
                <h2>Get in Touch</h2>
                <div className="contact-methods">
                  <div className="contact-method">
                    <strong>Phone:</strong>
                    <a href="tel:+13125551234" aria-label="Call restaurant">
                      (312) 555-1234
                    </a>
                  </div>
                  <div className="contact-method">
                    <strong>Email:</strong>
                    <a
                      href="mailto:info@littlelemon.com"
                      aria-label="Email restaurant"
                    >
                      info@littlelemon.com
                    </a>
                  </div>
                  <div className="contact-method">
                    <strong>Reservations:</strong>
                    <a
                      href="tel:+13125555678"
                      aria-label="Call for reservations"
                    >
                      (312) 555-5678
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h2>Follow Us</h2>
                <div className="social-links">
                  <a
                    href="#"
                    aria-label="Visit our Facebook page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    aria-label="Visit our Instagram page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    aria-label="Visit our Twitter page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "form" && (
          <div
            id="form-panel"
            role="tabpanel"
            className="contact-form-section"
            aria-label="Contact form"
          >
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
