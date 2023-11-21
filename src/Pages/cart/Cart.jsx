import { useContext } from "react";
import { cartInfo } from "../../data/cart";
import "./Cart.css";
import CartItem from "./CartItem";

import Ordersummary from "./Ordersummary";
import CartContext from "../../context/Cartcontext";
const Cart = () => {
 

 const {cartitemt,addtocart,removefromcart}= useContext(CartContext)
  const Totalprice = cartitemt.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  ).toFixed(2);
  return (
    <div className="cart">
      <div className="cart-title"> Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartitemt.map((d) => (
            <CartItem d={d} cartitemt={cartitemt} addtocart={addtocart} removefromcart={removefromcart} key={d.id} />

          ))}

        </div>
        <Ordersummary Totalprice={Totalprice} />
      </div>
    </div>
  );
  

};

export default Cart;
