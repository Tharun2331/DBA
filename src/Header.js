import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/Logo.svg";

function Header() {
  const history = useHistory();
  const handleClicks = () => {
    history.push("sign-in");
  };

  const handleChange = () => {
    history.push("orders");
  };

  const handleHelp = () => {
    history.push("contact-us");
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <Logo />
        </div>
      </Link>

      <div className="nav-bar">
        <div className="header__option ">
          <span className="header__orders" onClick={handleChange}>
            Orders
          </span>
        </div>
        <div className="header__option ">
          <span className="header__orders" onClick={handleHelp}>
            Help
          </span>
        </div>

        <div className="header__option ">
          <div className="header__Rectangle" onClick={handleClicks}>
            <span className="header__button_text" >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
