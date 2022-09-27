import React from "react";
import "./Card.css";

const Card = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  for (let product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }

  // TOTAL TAX
  const totalTax = (total * 0.1).toFixed(2);
  const tax = parseFloat(totalTax);

  //   GRAND TOTAL
  const grandTotal = total + shipping + tax;

  return (
    <div className="card-summary">
      <h4>Order summary</h4>
      <p>Select items : {cart.length}</p>
      <p>Total Price: ${total} </p>
      <p>Shipping charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Total Grand: ${grandTotal}</h4>
      {/* <p>Total: $ {totalValue}</p> */}
    </div>
  );
};

export default Card;
