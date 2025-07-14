import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header with navigation", () => {
  render(<App />);
  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();
});

test("renders main content area", () => {
  render(<App />);
  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
});

test("renders footer", () => {
  render(<App />);
  const footer = screen.getByRole("contentinfo");
  expect(footer).toBeInTheDocument();
});
