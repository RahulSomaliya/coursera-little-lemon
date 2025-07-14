import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero" aria-label="Restaurant introduction">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link
            to="/booking"
            className="cta-button"
            aria-label="Reserve a table"
          >
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1692444866957-12c4c5d7a54e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1lZGl0ZXJyYW5lYW4lMjBjdWlzaW5lfGVufDB8fDB8fHww"
            alt="Delicious Mediterranean cuisine"
          />
        </div>
      </section>

      <section className="highlights" id="menu" aria-label="Weekly specials">
        <h2>This Week's Specials</h2>
        <div className="cards-container">
          <article className="menu-card">
            <img
              src="https://images.unsplash.com/photo-1636654931290-418d20865e03?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Greek Salad"
            />
            <div className="card-content">
              <h3>Greek Salad</h3>
              <p className="price">$12.99</p>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
          </article>

          <article className="menu-card">
            <img
              src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJ1c2NoZXR0YXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Bruschetta"
            />
            <div className="card-content">
              <h3>Bruschetta</h3>
              <p className="price">$5.99</p>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
            </div>
          </article>

          <article className="menu-card">
            <img
              src="https://images.unsplash.com/photo-1599749010920-7488f6d5a493?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb24lMjBkZXNlcnR8ZW58MHx8MHx8fDA%3D"
              alt="Lemon Dessert"
            />
            <div className="card-content">
              <h3>Lemon Dessert</h3>
              <p className="price">$5.00</p>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
