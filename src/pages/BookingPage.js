import React from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import "./BookingPage.css";

const BookingPage = () => {
  return (
    <div className="booking-page">
      <section className="booking-hero" aria-label="Booking page header">
        <h1>Reserve a Table</h1>
        <p>Experience the authentic taste of the Mediterranean</p>
      </section>
      <section className="booking-content" aria-label="Booking form section">
        <BookingForm />
      </section>
    </div>
  );
};

export default BookingPage;
