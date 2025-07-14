import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Header", () => {
  test("renders navigation with all links", () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to Home page")).toBeInTheDocument();
    expect(screen.getByLabelText("Book a table")).toBeInTheDocument();
    expect(screen.getByLabelText("View menu")).toBeInTheDocument();
    expect(screen.getByLabelText("About us")).toBeInTheDocument();
    expect(screen.getByLabelText("Contact information")).toBeInTheDocument();
  });

  test("has proper ARIA labels", () => {
    renderWithRouter(<Header />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveAttribute("aria-label", "Main navigation");
  });
});
