import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  test("renders contact form with all fields", () => {
    render(<ContactForm />);

    expect(screen.getByText("Send Us a Message")).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test("displays validation errors for empty required fields", async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Message is required")).toBeInTheDocument();
    });
  });

  test("validates email format", async () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, "invalid-email");

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Email is invalid")).toBeInTheDocument();
    });
  });

  test("validates message length", async () => {
    render(<ContactForm />);

    const messageInput = screen.getByLabelText(/message/i);
    await userEvent.type(messageInput, "Short");

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Message must be at least 10 characters")
      ).toBeInTheDocument();
    });
  });

  test("displays character count for message", async () => {
    render(<ContactForm />);

    const messageInput = screen.getByLabelText(/message/i);
    await userEvent.type(messageInput, "Hello there!");

    expect(screen.getByText("12 / 500 characters")).toBeInTheDocument();
  });

  test("submits form with valid data", async () => {
    render(<ContactForm />);

    // Fill in the form
    await userEvent.type(screen.getByLabelText(/name/i), "John Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/phone/i), "1234567890");
    await userEvent.selectOptions(
      screen.getByLabelText(/subject/i),
      "feedback"
    );
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "This is a test message for the contact form."
    );

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    // Check for loading state
    expect(screen.getByText("Sending...")).toBeInTheDocument();

    // Wait for success message
    await waitFor(
      () => {
        expect(
          screen.getByText(/thank you for your message/i)
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    // Check that form is reset
    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
    expect(screen.getByLabelText(/message/i)).toHaveValue("");
  });
});
