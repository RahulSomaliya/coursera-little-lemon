import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuPage from "./MenuPage";

// Mock the menu data
jest.mock("../data/menuData", () => ({
  menuData: [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      category: "appetizers",
      description: "Fresh salad",
      image: "/images/greek-salad.jpg",
      dietary: ["vegetarian"],
      ingredients: ["lettuce"],
      popular: true,
    },
    {
      id: 2,
      name: "Grilled Fish",
      price: "$24.99",
      category: "mains",
      description: "Fresh fish",
      image: "/images/fish.jpg",
      dietary: [],
      ingredients: ["fish"],
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$6.99",
      category: "desserts",
      description: "Sweet dessert",
      image: "/images/dessert.jpg",
      dietary: ["vegetarian"],
      ingredients: ["lemon"],
    },
  ],
}));

describe("MenuPage", () => {
  test("renders menu page with filters", () => {
    render(<MenuPage />);

    expect(screen.getByText("Our Menu")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText("Dietary Preferences")).toBeInTheDocument();
  });

  test("filters menu items by category", () => {
    render(<MenuPage />);

    // Initially all items should be visible
    expect(screen.getByText("Greek Salad")).toBeInTheDocument();
    expect(screen.getByText("Grilled Fish")).toBeInTheDocument();
    expect(screen.getByText("Lemon Dessert")).toBeInTheDocument();

    // Click on appetizers filter
    const appetizersButton = screen.getByRole("tab", { name: /appetizers/i });
    fireEvent.click(appetizersButton);

    // Only appetizers should be visible
    expect(screen.getByText("Greek Salad")).toBeInTheDocument();
    expect(screen.queryByText("Grilled Fish")).not.toBeInTheDocument();
    expect(screen.queryByText("Lemon Dessert")).not.toBeInTheDocument();
  });

  test("filters menu items by dietary preference", () => {
    render(<MenuPage />);

    // Click on vegetarian filter
    const vegetarianButton = screen.getByRole("button", {
      name: /vegetarian/i,
    });
    fireEvent.click(vegetarianButton);

    // Only vegetarian items should be visible
    expect(screen.getByText("Greek Salad")).toBeInTheDocument();
    expect(screen.queryByText("Grilled Fish")).not.toBeInTheDocument();
    expect(screen.getByText("Lemon Dessert")).toBeInTheDocument();
  });

  test("shows no items message when filters return empty results", () => {
    render(<MenuPage />);

    // Select a combination that returns no results
    const beveragesButton = screen.getByRole("tab", { name: /beverages/i });
    fireEvent.click(beveragesButton);

    expect(
      screen.getByText("No items match your current filters.")
    ).toBeInTheDocument();
  });
});
