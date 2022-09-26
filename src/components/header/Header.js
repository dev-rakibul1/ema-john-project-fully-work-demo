import React from "react";
import navbarBrand from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={navbarBrand} alt="" />

      <div>
        <a href="/shop">shop</a>
        <a href="/orders">orders</a>
        <a href="/review">review</a>
        <a href="/manageInventory">manage inventory</a>
        <a href="/login">login</a>
      </div>
    </div>
  );
};

export default Header;
