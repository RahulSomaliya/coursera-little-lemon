import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "general",
          message: "",
        });
        setErrors({});
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message:
            "Sorry, there was an error sending your message. Please try again.",
        });
      } finally {
        setIsSubmitting(false);

        // Clear status message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label="Contact form"
      noValidate
    >
      <h2>Send Us a Message</h2>
      <p className="form-intro">
        Have a question or feedback? We'd love to hear from you. Fill out the
        form below and we'll get back to you as soon as possible.
      </p>

      {submitStatus && (
        <div
          className={`status-message ${submitStatus.type}`}
          role="alert"
          aria-live="polite"
        >
          {submitStatus.message}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="contact-name">
          Name <span aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={isSubmitting}
          required
        />
        {errors.name && (
          <span id="name-error" className="error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-email">
            Email <span aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
            required
          />
          {errors.email && (
            <span id="email-error" className="error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contact-phone">Phone (Optional)</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <span id="phone-error" className="error" role="alert">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject">
          Subject <span aria-label="required">*</span>
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
          required
        >
          <option value="general">General Inquiry</option>
          <option value="reservation">Reservation Question</option>
          <option value="catering">Catering Request</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">
          Message <span aria-label="required">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isSubmitting}
          required
        />
        {errors.message && (
          <span id="message-error" className="error" role="alert">
            {errors.message}
          </span>
        )}
        <span className="character-count" aria-live="polite">
          {formData.message.length} / 500 characters
        </span>
      </div>

      <button
        type="submit"
        className="submit-button"
        disabled={isSubmitting}
        aria-label={isSubmitting ? "Sending message..." : "Send message"}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
