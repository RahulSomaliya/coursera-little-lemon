import React from "react";
import "./ConfirmationModal.css";

const ConfirmationModal = ({ bookingData, onClose }) => {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 id="confirmation-title">Booking Confirmed!</h2>
        <div className="confirmation-details">
          <p>Thank you for your reservation, {bookingData.name}!</p>
          <div className="booking-summary">
            <h3>Booking Details:</h3>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(bookingData.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Time:</strong> {bookingData.time}
            </p>
            <p>
              <strong>Guests:</strong> {bookingData.guests}
            </p>
            <p>
              <strong>Occasion:</strong> {bookingData.occasion}
            </p>
          </div>
          <p className="confirmation-message">
            A confirmation email has been sent to {bookingData.email}
          </p>
        </div>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close confirmation dialog"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
