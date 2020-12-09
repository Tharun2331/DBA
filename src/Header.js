import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import { initialState } from "./reducer";


function Header() {
  const [{ user },dispatch] =  useStateValue();  
  const history = useHistory();
  
  const handleOrders = () => {
    history.push("orders");
  };

  const handleHelp = () => {
    history.push("contact-us");
    
  };



  
  
  const handleUser = () => {
    if(user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      history.push("/");
    }
    else {
    history.push("sign-in");
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <Logo />
        </div>
      </Link>

      <div className="nav-bar">
        <div className="header__option ">
          <span className="header__orders" onClick={handleOrders}>
            Orders
          </span>
        </div>
        <div className="header__option ">
          <span className="header__orders" onClick={handleHelp}>
            Help
          </span>
        </div>

        <div className="header__option ">
          <div className="header__Rectangle" onClick={handleUser}>
            <span className="header__button_text" >
            {user ? 'Sign Out' : 'Sign In' }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

