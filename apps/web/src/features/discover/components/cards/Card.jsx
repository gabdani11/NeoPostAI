import React from "react";
import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <h3>Technology</h3>
        <h3>🔥</h3>
      </div>
      <div className="middle">
        <h2>10 AI Tools Every Developer Should know in 2026</h2>
        <p>
          A curated list of AI tools that help with coding, debugging,
          documentation, testing, and deployment.
        </p>
      </div>
      <div className="bottom">
        <h4>#AI #Programming #Productivity</h4>
        <button>Create</button>
      </div>
    </div>
  );
};

export default Card;
