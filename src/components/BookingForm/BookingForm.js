import React, { useState } from "react";
import { fetchAPI, submitAPI } from "../../utils/api";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  date: "",
  time: "",
  guests: 4,
  occasion: "birthday",
  name: "",
  email: "",
  phone: "",
};

const BookingForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [availableTimes, setAvailableTimes] = useState(
    fetchAPI(formData.date ? new Date(formData.date) : new Date()) || []
  );
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = "Date is required";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
      }
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = "Number of guests must be between 1 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const success = submitAPI(formData);
      if (success) {
        setSubmittedData(formData);
        setShowConfirmation(true);
        // Reset form
        setFormData(initialFormData);
        setErrors({});
      }
    }
  };

  const handleClose = () => {
    setShowConfirmation(false);
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <form
        className="booking-form"
        onSubmit={handleSubmit}
        aria-label="Table booking form"
        noValidate
      >
        <h2>Book a Table</h2>

        <div className="form-group">
          <label htmlFor="name">
            Full Name <span aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className="error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <span id="email-error" className="error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number <span aria-label="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            required
          />
          {errors.phone && (
            <span id="phone-error" className="error" role="alert">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="date">
            Choose Date <span aria-label="required">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            aria-invalid={errors.date ? "true" : "false"}
            aria-describedby={errors.date ? "date-error" : undefined}
            required
          />
          {errors.date && (
            <span id="date-error" className="error" role="alert">
              {errors.date}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time">
            Choose Time <span aria-label="required">*</span>
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            aria-invalid={errors.time ? "true" : "false"}
            aria-describedby={errors.time ? "time-error" : undefined}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <span id="time-error" className="error" role="alert">
              {errors.time}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests">
            Number of Guests <span aria-label="required">*</span>
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            aria-invalid={errors.guests ? "true" : "false"}
            aria-describedby={errors.guests ? "guests-error" : undefined}
            required
          />
          {errors.guests && (
            <span id="guests-error" className="error" role="alert">
              {errors.guests}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="submit-button"
          aria-label="Make your reservation"
        >
          Make Your Reservation
        </button>
      </form>

      {showConfirmation && (
        <ConfirmationModal bookingData={submittedData} onClose={handleClose} />
      )}
    </>
  );
};

export default BookingForm;
