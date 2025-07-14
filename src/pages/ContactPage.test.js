import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "./ContactPage";

describe("ContactPage", () => {
  test("renders contact page with tabs", () => {
    render(<ContactPage />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /restaurant info/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /send message/i })
    ).toBeInTheDocument();
  });

  test("displays restaurant info by default", () => {
    render(<ContactPage />);

    expect(screen.getByText("Visit Us")).toBeInTheDocument();
    expect(screen.getByText("Hours of Operation")).toBeInTheDocument();
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
    expect(screen.getByText("Follow Us")).toBeInTheDocument();
  });

  test("switches to contact form when form tab is clicked", () => {
    render(<ContactPage />);

    const formTab = screen.getByRole("tab", { name: /send message/i });
    fireEvent.click(formTab);

    expect(screen.getByText("Send Us a Message")).toBeInTheDocument();
    expect(screen.getByLabelText("Name *")).toBeInTheDocument();
  });

  test("displays contact information correctly", () => {
    render(<ContactPage />);

    expect(screen.getByText("123 Main Street")).toBeInTheDocument();
    expect(screen.getByText("Chicago, IL 60601")).toBeInTheDocument();
    expect(screen.getByText("(312) 555-1234")).toBeInTheDocument();
    expect(screen.getByText("info@littlelemon.com")).toBeInTheDocument();
  });
});
