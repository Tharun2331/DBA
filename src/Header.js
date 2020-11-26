import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

import {ReactComponent as Logo } from "./assets/Logo.svg";


function Header() {  

  
  return (
        <div className= "header">
           <Link to="/">
               <div className="logo">
                    <Logo />
               </div>
           </Link> 

        <div className="nav-bar">
        
              <div className="header__option "> 
              <Link to= "/orders" className="header_link">
                <span className="header__orders">
                Orders
                </span>
              </Link>
            </div>
            <div className="header__option "> 
            <Link to = "/contact-us" className="header_link">
            
            <span className="header__orders">
              Help
            </span>
            </Link>
            </div>
            
            <div className="header__option "> 
            <Link to = "/sign-up" className="header_link">
               <div className="header__Rectangle">
                <span className="header__button_text">
               
                    Sign Up
              
              </span>
              </div> 
            </Link>
            </div>
             
         </div>
         </div>
        
    )
}

export default Header