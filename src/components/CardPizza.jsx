// CardPizza.jsx
import React from "react";


const CardPizza = ({ pizza }) => {
  return (
    <div className="card-container mb-3">
      <div className="row ">
      <div className="col-md-4">
      <img src={pizza.image} alt={pizza.name} className="img-fluid rounded-start"/>
      </div>
        <div className="col-md-8">
          <div className="card-body">
      
      <h2 className="card-title">{pizza.name}</h2>
      <p className="card-text">Price: ${pizza.price}</p>
      <ul className="list-group list-group-flush">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CardPizza;
