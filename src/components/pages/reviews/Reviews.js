import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Reviews.css";

const Reviews = ({ product, handleReview }) => {
  const { id, name, price, quantity, img } = product;
  return (
    <div className="review">
      <div className="img-wrap">
        <img src={img} alt="" />
      </div>
      <div className="details-wrap">
        <div className="article">
          <h4>{name}</h4>
          <p>
            <small>Price: {price}</small>
          </p>
          <p className="btn-wrap">
            <small>Quantity: {quantity}</small>
          </p>
        </div>
      </div>
      <div>
        <button className="delete-btn" onClick={() => handleReview(id)}>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="delete-icon"
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
