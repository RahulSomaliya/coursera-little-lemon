import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

// Mock the API functions
jest.mock("../../utils/api", () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00"]),
  submitAPI: jest.fn(() => true),
}));

describe("BookingForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the booking form", () => {
    render(<BookingForm />);

    expect(screen.getByText("Book a Table")).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument(); // Now always present
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    // Check that time options are present on initial render
    expect(screen.getByRole("option", { name: "17:00" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "18:00" })).toBeInTheDocument();
  });

  test("displays validation errors for empty required fields", async () => {
    render(<BookingForm />);

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    });
    // await waitFor(() => {
    //   expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    // });
  });

  test("validates email format", async () => {
    render(<BookingForm />);

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "invalid-email");

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });
  });

  test("validates phone number format", async () => {
    render(<BookingForm />);

    const phoneInput = screen.getByLabelText(/phone number/i);
    userEvent.type(phoneInput, "123");

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Phone number must be 10 digits")
      ).toBeInTheDocument();
    });
  });

  test("validates guest number range", async () => {
    render(<BookingForm />);

    const guestsInput = screen.getByLabelText(/number of guests/i);
    userEvent.clear(guestsInput);
    userEvent.type(guestsInput, "15");

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Number of guests must be between 1 and 10")
      ).toBeInTheDocument();
    });
  });

  test("submits form with valid data", async () => {
    const { submitAPI } = require("../../utils/api");
    render(<BookingForm />);

    // Fill in the form
    userEvent.type(screen.getByLabelText(/full name/i), "John Doe");
    userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    userEvent.type(screen.getByLabelText(/phone number/i), "1234567890");

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split("T")[0];

    userEvent.type(screen.getByLabelText(/choose date/i), dateString);
    // No need to wait for time options, they are always present
    userEvent.selectOptions(screen.getByLabelText(/choose time/i), "");
    userEvent.clear(screen.getByLabelText(/number of guests/i));
    userEvent.type(screen.getByLabelText(/number of guests/i), "4");
    userEvent.selectOptions(screen.getByLabelText(/occasion/i), "anniversary");

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith({
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        date: dateString,
        time: "19:00",
        guests: "4",
        occasion: "anniversary",
      });
    });
  });
});
