import "./Model.css"
import Rating from "../bookslider/Rating";
import "../bookslider/Rating"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/Cartcontext";

const Model = ({setopenmodel,bookmodel}) => {
  const{addtocart}=  useContext(CartContext)
 const [qty,setqty] =useState(1)

    const {image,title,inStock,rating,reviews,author,price,id}=bookmodel;
    return ( 
        <div onClick={()=>setopenmodel(false)} className="model-continer">
            <div onClick={(e)=>e.stopPropagation()} className="model-content">
                <div onClick={()=> setopenmodel(false)} className="bi bi-x-circle-fill model-icon"></div>
                <div className="model-content-img">
                <img src={`/books/${image}`}  />
                </div>
                <div className="model-content-info">
                    <h5 className="model-content-info-title">{title}</h5>
                    <div className="model-content-info-stock">
                        <b>Status: </b> {inStock? "in stock":"not in stock "}
                    </div>
                    <Rating  ratings={rating} review={reviews}  /> 
                    <div className="model-content-info-auther">
                        <b>AUTHER:</b> {author}
                    </div>
                    <div className="model-content-info-price">
                        <b>Price:</b> <span>$</span>{price}
                    </div>
                    <div className="model-add-to-cart">
                        <input className="model-add-to-cart-input" type="number" min="1" max="100" value={qty} 
                        onChange={ e=> setqty(e.target.value)}/>
                        <button onClick={()=>addtocart({...bookmodel, quantity:qty})} className="model-add-to-cart-btn">
                            <i className="bi bi-cart-plus"></i>
                        Add to cart
                        </button>
                    </div>
                    <Link to={`/book/${id}`} className="model-content-info-link">
                        See More Details
                    </Link>
                </div>
               
            </div>

        </div>
     );
}
 
export default Model;