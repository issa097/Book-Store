import { useContext, useState } from "react";
import "./header.css";
import {Link}from "react-router-dom"

import CartContext from "../../context/Cartcontext";




const Headermiddle = () => {
 const{notificationlenght,}= useContext(CartContext)


  return (
    <div className="header-middle">
      <div className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </div>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="search"
         
        />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {notificationlenght>0?<b className="cart-notification">{notificationlenght}</b>:null }
        
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
};

export default Headermiddle;
