// Cart.jsx
import React, { useState } from "react";
import { pizzaCart } from "../assets/Data/pizzas";


const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-5" >
       <div className="row">
      {cart.map((item) => (
        <div key={item.id} className="col-md-4 mb-3">
           <div className="card h-100">
          <img src={item.image} alt={item.name} className="card-img-top img-fluid"/>
          <div className="card-body">
          <h2 className="card-title" >{item.name}</h2>
          <p className="card-text" >Price: ${item.price}</p>
          <p className="card-text">Quantity: {item.quantity}</p>
          <div className="d-flex justify-content-between align-items-center">
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
        </div>
        </div>
        </div>
      ))}
      </div>
      <div className="text-end mt-4">
      <h2>Total: ${total.toFixed(2)}</h2>
      <button className="btn btn-success mt-2" >Pagar</button>
    </div>
    </div>
  );
};

export default Cart;
