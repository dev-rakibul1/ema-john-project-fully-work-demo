import React, { useContext } from "react";
import { Link } from "react-router-dom";
import navbarBrand from "../../images/Logo.svg";
import { AuthContext } from "./../../userContext/UserContext";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const logOutHandler = () => {
    logOut()
      .then(() => {})
      .then((err) => {
        console.log(err);
      });
  };

  console.log(user);

  return (
    <div className="header">
      <img src={navbarBrand} alt="" />

      <div>
        <Link to="/">shop</Link>
        <Link to="/order">orders</Link>
        <Link to="/about">About</Link>
        <Link to="/shipping">Shipping</Link>

        {user?.uid ? (
          <Link onClick={logOutHandler}>Log out</Link>
        ) : (
          <>
            <Link to="/login">login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
