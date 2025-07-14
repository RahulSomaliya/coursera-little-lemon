import React from "react";
import "./MenuCard.css";

const MenuCard = ({ item }) => {
  const getDietaryIcons = () => {
    if (!item.dietary || item.dietary.length === 0) return null;

    return (
      <div className="dietary-icons" aria-label="Dietary information">
        {item.dietary.includes("vegetarian") && (
          <span className="dietary-icon vegetarian" title="Vegetarian">
            V
          </span>
        )}
        {item.dietary.includes("vegan") && (
          <span className="dietary-icon vegan" title="Vegan">
            VG
          </span>
        )}
        {item.dietary.includes("gluten-free") && (
          <span className="dietary-icon gluten-free" title="Gluten Free">
            GF
          </span>
        )}
      </div>
    );
  };

  return (
    <article className="menu-card" aria-label={`${item.name} - ${item.price}`}>
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.popular && <span className="popular-badge">Popular</span>}
      </div>
      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3>{item.name}</h3>
          <span className="price">{item.price}</span>
        </div>
        {getDietaryIcons()}
        <p className="description">{item.description}</p>
        {item.ingredients && (
          <p className="ingredients">
            <strong>Ingredients:</strong> {item.ingredients.join(", ")}
          </p>
        )}
      </div>
    </article>
  );
};

export default MenuCard;
