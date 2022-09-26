import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Products.css";

const Products = (props) => {
  const { name, img, price, ratings } = props.product;

  return (
    <div className="products">
      <img src={img ? img : "images not found"} alt="products-images" />
      <article className="products-info">
        <h3 className="products-title">{name}</h3>
        <h4 className="price">Price: ${price}</h4>
        <p>Manufacturer : Addidas</p>
        <p>Rating : {ratings} star</p>
      </article>
      <button
        onClick={() => props.addToCardHandler(props.product)}
        className="products-btn"
      >
        Add to card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Products;
