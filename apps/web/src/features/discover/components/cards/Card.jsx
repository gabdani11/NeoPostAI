import React from "react";
import "./card.scss";

const Card = (props) => {
  const { item } = props;
  return (
    <div className="card">
      <div className="top">
        <h3>{item.category.primary}</h3>
        <h3>🔥</h3>
      </div>
      <div className="middle">
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
      </div>
      <div className="bottom">
        <h4>#AI #Programming #Productivity</h4>
        <button>Create</button>
      </div>
    </div>
  );
};

export default Card;
