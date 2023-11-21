import { useSearchParams } from "react-router-dom";
import CartContext from "./Cartcontext";
import { useState,useReducer } from "react";

const Cartprovider = ({ children }) => {
   
    const [cartitemt,setcartitem]=useState([])
    
    console.log(cartitemt)


    // add to cart

    const addtocart=(newbook)=>{
        const isExist=cartitemt.find(anotherbook=>anotherbook.id===newbook.id)
        if(isExist){
            setcartitem(
                cartitemt.map((anotherbook)=>anotherbook.id===newbook.id ? newbook:anotherbook)

            )
        }else{
            setcartitem(book => [...book,newbook])

        }
       
    }

    // remove 
    const removefromcart=(id)=>{
        const cart=cartitemt.filter(m=>m.id!==id)
        setcartitem(cart)
    }

   


  return <CartContext.Provider value={{cartitemt,addtocart,removefromcart,
  notificationlenght:cartitemt.length,  }}>
    {children}
     </CartContext.Provider>;
};

export default Cartprovider;
