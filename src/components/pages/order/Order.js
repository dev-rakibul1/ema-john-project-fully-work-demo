import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../../utilities/fakedb";
import Reviews from "../reviews/Reviews";
import Card from "./../../card/Card";

const Order = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleReview = (id) => {
    const remainingProducts = cart.filter((product) => product.id !== id);
    setCart(remainingProducts);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop">
      <div className="review-cart">
        {cart.map((product) => (
          <Reviews
            key={product.id}
            handleReview={handleReview}
            product={product}
          />
        ))}
        {cart.length === 0 && (
          <h2 style={{ textAlign: "center", color: "red", marginTop: "20%" }}>
            No products added!!!
          </h2>
        )}
      </div>
      <div className="order-summary">
        <Card cart={cart} clearCart={clearCart}></Card>
      </div>
    </div>
  );
};

export default Order;
