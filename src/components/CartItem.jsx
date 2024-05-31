import React from "react";

const CartItem = ({ jersey }) => {
  return (
    <div className="card cart">
      <div>
        <p className="card-title">{jersey.name}</p>
        <p className="card-description">{jersey.description}</p>
      </div>
      <div className="card-rigt">
        <p className="card-price">${jersey.price}</p>
        <input type="number" className="cart-input" min={1} max={5}></input>
      </div>
    </div>
  );
};

export default CartItem;
