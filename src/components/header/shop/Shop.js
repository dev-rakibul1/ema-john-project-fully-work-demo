import React, { useEffect, useState } from "react";
import Products from "../../products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCardHandler = (products) => {
    const newCart = [...cart, products];
    setCart(newCart);
  };

  const totalValue = cart.reduce(
    (newValue, currentValue) => newValue + currentValue.price,
    0
  );
  console.log(totalValue);
  console.log(cart);

  return (
    <div className="shop">
      <div className="shopping-card">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            addToCardHandler={addToCardHandler}
          ></Products>
        ))}
      </div>
      <div className="order-summary">
        <h4>Order summary</h4>
        <p>Select items : {cart.length}</p>
        <p>Total: $ {totalValue}</p>
      </div>
    </div>
  );
};

export default Shop;
