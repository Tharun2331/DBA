import React,{useStateValue} from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { ReactComponent as Vector } from "./assets/Vector.svg";
import {auth} from "./firebase";






function Header() {
  const [{ user,basket },dispatch] =  useStateValue();  
  const history = useHistory();
  
  const handleShop = () => {
    history.push("shop");
  };

  const handleHelp = () => {
    history.push("contact-us");
    
  };



  
  
  const handleUser = () => {
    if(user) {
      auth.signOut();
      dispatch({
        type: "EMPTY_BASKET",
        basket: null, 
     
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
          <span className="header__orders" onClick={handleShop}>
            Shop
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

        <div className="header__option ">
            <Link to = "/checkout">
              <div className="vector">  
                <Vector className="vector1"/>
                <span className="vector2">{basket?.length}</span>
              </div>        
            </Link>
       </div>


      </div>
    </div>
  );
}

export default Header;



