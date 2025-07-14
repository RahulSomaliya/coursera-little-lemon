import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

// Mock the API functions
const mockFetchAPI = jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00"]);
const mockSubmitAPI = jest.fn(() => true);

jest.mock("../../utils/api", () => ({
  fetchAPI: (...args) => mockFetchAPI(...args),
  submitAPI: (...args) => mockSubmitAPI(...args),
}));

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("BookingForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    mockSubmitAPI.mockReturnValue(true);
  });

  test("renders the booking form", () => {
    renderWithRouter(<BookingForm />);

    expect(screen.getByText("Book a Table")).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("displays validation errors for empty required fields", async () => {
    renderWithRouter(<BookingForm />);

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
    await waitFor(() => {
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    });
  });

  test("validates email format", async () => {
    renderWithRouter(<BookingForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, "invalid-email");

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });
  });

  test("validates phone number format", async () => {
    renderWithRouter(<BookingForm />);

    const phoneInput = screen.getByLabelText(/phone number/i);
    await userEvent.type(phoneInput, "123");

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
    renderWithRouter(<BookingForm />);

    const guestsInput = screen.getByLabelText(/number of guests/i);
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, "15");

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
    renderWithRouter(<BookingForm />);

    // Wait for initial render with time options
    await waitFor(() => {
      expect(screen.getByRole("option", { name: "17:00" })).toBeInTheDocument();
    });

    // Fill in the form
    await userEvent.type(screen.getByLabelText(/full name/i), "John Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/phone number/i), "1234567890");

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split("T")[0];

    await userEvent.type(screen.getByLabelText(/choose date/i), dateString);
    await userEvent.selectOptions(screen.getByLabelText(/choose time/i), "19:00");
    await userEvent.clear(screen.getByLabelText(/number of guests/i));
    await userEvent.type(screen.getByLabelText(/number of guests/i), "4");
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), "anniversary");

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSubmitAPI).toHaveBeenCalledWith({
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
