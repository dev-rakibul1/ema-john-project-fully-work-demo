import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ cart, clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  // console.log(quantity);

  // TOTAL TAX
  const totalTax = (total * 0.1).toFixed(2);
  const tax = parseFloat(totalTax);

  //   GRAND TOTAL
  const grandTotal = total + shipping + tax;

  return (
    <div className="card-summary">
      <h4>Order summary</h4>
      <p>Select items : {quantity}</p>
      <p>Total Price: ${total} </p>
      <p>Shipping charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Total Grand: ${grandTotal}</h4>
      {/* <p>Total: $ {totalValue}</p> */}
      {/* <button onClick={clearCart}>Clear cart</button> */}

      <Link to="/shipping">
        <button>Proceed Shipping</button>
      </Link>
      {children}
    </div>
  );
};

export default Card;
