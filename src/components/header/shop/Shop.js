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

  // console.log(cart);

  const addToCardHandler = (selectedProducts) => {
    let newCart = [];

    const exists = cart.find((product) => product.id === selectedProducts.id);
    if (!exists) {
      selectedProducts.quantity = 1;
      newCart = [...cart, selectedProducts];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProducts.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProducts.id);
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
