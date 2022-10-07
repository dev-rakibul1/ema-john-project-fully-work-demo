import React from "react";
import { Link } from "react-router-dom";
import navbarBrand from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={navbarBrand} alt="" />

      <div>
        <Link to="/">shop</Link>
        <Link to="/order">orders</Link>
        <Link to="/about">About</Link>
        <Link to="/reviews">review</Link>
        <Link to="/inventory">manage inventory</Link>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Header;
