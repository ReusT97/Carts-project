import React from "react";
import CartItem from "./CartItem";
const jerseys = [
  {
    id: 1,
    price: 300,
    name: "Manchester United",
    description: "Home Kit",
    quantity: 2,
  },
  {
    id: 2,
    price: 305,
    name: "Manchester City",
    description: "Home Kit",
    quantity: 1,
  },
  {
    id: 3,
    price: 280.45,
    name: "Liverpool",
    description: "Away Kit",
    quantity: 3,
  },
];
const Cart = ({ children }) => {
  return (
    <section className="cart-box">
      <h2>Carts</h2>
      {jerseys.map((jersey) => (
        <CartItem key={jersey.id} jersey={jersey} />
      ))}
      <hr />
      <div className="total">
        <h2>Total Price</h2>
        <p>$1240</p>
      </div>
      <div className="btns">
        <button className="close-btn">Close</button>
        <button className="order-btn">Order</button>
      </div>
    </section>
  );
};

export default Cart;
