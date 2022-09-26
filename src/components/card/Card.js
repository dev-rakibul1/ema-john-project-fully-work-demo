import React from "react";

const Card = ({ cart }) => {
  return (
    <div>
      <h4>Order summary</h4>
      <p>Select items : {cart.length}</p>
      {/* <p>Total: $ {totalValue}</p> */}
    </div>
  );
};

export default Card;
