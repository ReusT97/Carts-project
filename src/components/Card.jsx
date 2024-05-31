import React from "react";

const Card = ({ jersey }) => {
  return (
    <div className="card">
      <div>
        <p className="card-title">{jersey.name}</p>
        <p className="card-description">{jersey.description}</p>
        <p className="card-price">${jersey.price}</p>
      </div>
      <div className="card-rigt">
        <input type="number" className="card-input" min={1} max={5}></input>
        <button className="card-button">+ Add</button>
      </div>
    </div>
  );
};

export default Card;
