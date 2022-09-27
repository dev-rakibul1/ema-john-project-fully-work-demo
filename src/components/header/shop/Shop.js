import React, { useEffect, useState } from "react";
import { addToDb, getStoredCard } from "../../../utilities/fakedb";
import Card from "../../card/Card";
import Products from "../../products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // console.log("products loaded");
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log("products loaded after the console", products);

  // stored card
  useEffect(() => {
    const storedCard = getStoredCard();
    const savedCard = [];
    for (let id in storedCard) {
      const addedProducts = products.find((product) => product.id === id);
      if (addedProducts) {
        const quantity = storedCard[id];
        addedProducts.quantity = quantity;
        savedCard.push(addedProducts);
      }
    }
    setCart(savedCard);
  }, [products]);

  console.log(cart);

  const addToCardHandler = (products) => {
    const newCart = [...cart, products];
    setCart(newCart);
    addToDb(products.id);
  };

  const totalValue = cart.reduce(
    (newValue, currentValue) => newValue + currentValue.price,
    0
  );

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
        <Card cart={cart}></Card>
      </div>
    </div>
  );
};

export default Shop;
