import React from "react";
import { render, screen } from "@testing-library/react";
import MenuCard from "./MenuCard";

const mockMenuItem = {
  id: 1,
  name: "Greek Salad",
  price: "$12.99",
  category: "appetizers",
  description: "Fresh salad with feta cheese",
  image: "/images/greek-salad.jpg",
  dietary: ["vegetarian", "gluten-free"],
  ingredients: ["lettuce", "tomatoes", "feta cheese"],
  popular: true,
};

describe("MenuCard", () => {
  test("renders menu item correctly", () => {
    render(<MenuCard item={mockMenuItem} />);

    expect(screen.getByText("Greek Salad")).toBeInTheDocument();
    expect(screen.getByText("$12.99")).toBeInTheDocument();
    expect(
      screen.getByText(/fresh salad with feta cheese/i)
    ).toBeInTheDocument();
  });

  test("displays dietary icons", () => {
    render(<MenuCard item={mockMenuItem} />);

    expect(screen.getByTitle("Vegetarian")).toBeInTheDocument();
    expect(screen.getByTitle("Gluten Free")).toBeInTheDocument();
  });

  test("displays popular badge when item is popular", () => {
    render(<MenuCard item={mockMenuItem} />);

    expect(screen.getByText("Popular")).toBeInTheDocument();
  });

  test("displays ingredients list", () => {
    render(<MenuCard item={mockMenuItem} />);

    expect(
      screen.getByText(/lettuce, tomatoes, feta cheese/i)
    ).toBeInTheDocument();
  });

  test("renders without dietary icons when not provided", () => {
    const itemWithoutDietary = { ...mockMenuItem, dietary: [] };
    render(<MenuCard item={itemWithoutDietary} />);

    expect(screen.queryByTitle("Vegetarian")).not.toBeInTheDocument();
  });
});
