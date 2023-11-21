import { useContext, useState } from "react";
import "./bookslider.css";
import Rating from "./Rating";
import Model from "../model/Model";
import CartContext from "../../context/Cartcontext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BookSlider = ({ data }) => {

  const [slider, setslider] = useState(0);
  const [openmodel, setopenmodel] = useState(false);
  const [bookmodel, setbookmodel] = useState(null);

  const { addtocart } = useContext(CartContext);

  const habdelmodel = (books) => {
    setopenmodel(true);
    setbookmodel(books);
  };

  const handleclicks = (dirction) => {
    if (dirction === "left") {
      setslider(slider > 0 ? slider - 1 : 3);
    } else {
      setslider(slider < 3 ? slider + 1 : 0);
    }
  };
  return (
    <div className="Book-slider-cont">
      <i
        onClick={() => handleclicks("left")}
        className="bi bi-chevron-left book-slider-arrow-left"
      ></i>
      <div
        style={{ transform: `translateX(${slider * -340}px)` }}
        className="book-slider-wrapper"
      >
       

        {data.map((d) => (
          <div className="book-slide-item">
            <img className="book-slide-item-img" src={`/books/${d.image}`} />
            <h3 className="book-slide-item-title">{d.title} </h3>
            <Rating ratings={d.rating} review={d.reviews} key={d.id} />
            <div className="book-slide-item-price">${d.price} </div>
            <div className="book-slider-icon-wrapper">
              <div
                onClick={() => habdelmodel(d)}
                className="bi bi-eye-fill"
              ></div>
              <div
                onClick={() => addtocart({ ...d, quantity: 1 })}
                className="bi bi-cart-plus"
              ></div>
            </div>
          </div>
        ))}
       
       
      </div>
      <i
        onClick={() => handleclicks("right")}
        className="bi bi-chevron-right book-slider-arrow-right"
      ></i>
      {openmodel && <Model setopenmodel={setopenmodel} bookmodel={bookmodel} />}
    </div>
  );
};

export default BookSlider;
