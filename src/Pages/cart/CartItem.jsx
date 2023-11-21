import { useContext, useState, useEffect, useReducer } from "react";
import CartContext from "../../context/Cartcontext";
import { books } from "../../data/books";

const CartItem = ({ d , cartitemt, addtocart, removefromcart, }) => {
  // const {image,title,author,quantity,price} = d
  // const{addtocart}=useContext(CartContext)
  // const{removefromcart}=useContext(CartContext)

  // const localdata = localStorage.getItem("books");
  // localdata ? JSON.parse(localdata) : [];
  


  const localdata=localStorage.getItem('books')

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(cartitemt));

    // if (localdata != null) {
    //   cartitemt = JSON.parse(localStorage.books);
    // } else {
    //   cartitemt = [];
    // }
  }, [cartitemt]);
  
  return (
    <div className="cart-item">
      <img src={`/books/${d.image}`} className="cart-item-img" />
      <div className="cart-item-info">
        <div className="cart-a-t">
          <div className="cart-item-book-title">
            <b>Title:</b>
            {d.title}
          </div>

          <div className="cart-item-book-author">
            <b>Author:</b>
            {d.author}
          </div>
        </div>
        <div className="cart-item-q-p">
          <div className="cart-item-quantity">
            <button
              onClick={() => addtocart({ ...d, quantity: d.quantity + 1 })}
            >
              <i className=" bi bi-plus-lg"></i>
            </button>
            <b>{d.quantity}</b>
            <button
              disabled={d.quantity < 1}
              onClick={() => addtocart({ ...d, quantity: d.quantity - 1 })}
            >
              <i className=" bi bi-dash-lg"></i>
            </button>
          </div>
          <div className="cart-item-price">
            <b>${(d.price * d.quantity).toFixed(2)}</b>
          </div>
          <i
            onClick={() => removefromcart(d.id)}
            className="bi bi-trash-fill"
          ></i>
        </div>
      </div>
    </div>
  );
};


export default CartItem;
