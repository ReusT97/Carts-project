import React from "react";
import Card from "../components/Card";

const jerseys = [
  {
    id: 1,
    price: 300,
    name: "Manchester United",
    description: "Home Kit",
  },
  {
    id: 2,
    price: 305,
    name: "Manchester City",
    description: "Home Kit",
  },
  {
    id: 3,
    price: 280.45,
    name: "Liverpool",
    description: "Away Kit",
  },
  {
    id: 4,
    price: 293,
    name: "Real Madrid",
    description: "Home Kit",
  },
  {
    id: 5,
    price: 250,
    name: "Chelsea",
    description: "Away Kit",
  },
];

const Body = () => {
  return (
    <section className="body">
      {jerseys.map((jersey) => (
        <Card key={jersey.id} jersey={jersey} />
      ))}
    </section>
  );
};

export default Body;
