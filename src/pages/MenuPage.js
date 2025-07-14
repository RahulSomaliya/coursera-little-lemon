import React, { useState } from "react";
import MenuCard from "../components/MenuCard/MenuCard";
import { menuData } from "../data/menuData";
import "./MenuPage.css";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState("all");

  const categories = ["all", "appetizers", "mains", "desserts", "beverages"];
  const dietaryOptions = ["all", "vegetarian", "vegan", "gluten-free"];

  const filterMenu = () => {
    let filtered = menuData;

    if (activeCategory !== "all") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    if (dietaryFilter !== "all") {
      filtered = filtered.filter(
        (item) => item.dietary && item.dietary.includes(dietaryFilter)
      );
    }

    return filtered;
  };

  return (
    <div className="menu-page">
      <section className="menu-hero" aria-label="Menu page header">
        <h1>Our Menu</h1>
        <p>Authentic Mediterranean flavors with a modern twist</p>
      </section>

      <section className="menu-filters" aria-label="Menu filters">
        <div className="filter-container">
          <div className="category-filters">
            <h2>Categories</h2>
            <div
              className="filter-buttons"
              role="tablist"
              aria-label="Menu categories"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-button ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  role="tab"
                  aria-selected={activeCategory === category}
                  aria-controls="menu-items"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="dietary-filters">
            <h2>Dietary Preferences</h2>
            <div
              className="filter-buttons"
              role="group"
              aria-label="Dietary filters"
            >
              {dietaryOptions.map((option) => (
                <button
                  key={option}
                  className={`filter-button ${
                    dietaryFilter === option ? "active" : ""
                  }`}
                  onClick={() => setDietaryFilter(option)}
                  aria-pressed={dietaryFilter === option}
                >
                  {option === "all"
                    ? "All"
                    : option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="menu-items"
        id="menu-items"
        role="tabpanel"
        aria-label="Menu items"
      >
        <div className="menu-grid">
          {filterMenu().map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        {filterMenu().length === 0 && (
          <p className="no-items">No items match your current filters.</p>
        )}
      </section>
    </div>
  );
};

export default MenuPage;
