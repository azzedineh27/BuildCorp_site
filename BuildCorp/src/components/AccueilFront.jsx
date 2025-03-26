import React from "react";
import "../styles/AccueilFront.css";

const AccueilFront = () => {
  return (
    <section className="hero-background-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">BuildCorp</h1>
        <p className="hero-subtitle">L'innovation digitale au service de votre entreprise</p>
        <a href="#presentation" className="hero-btn">Explorer ↓</a>
      </div>
    </section>

  );
};

export default AccueilFront;
