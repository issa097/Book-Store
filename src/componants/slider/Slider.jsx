import "./slider.css";
import Firstbook1 from "../../images/book1.png";
import Firstbook2 from "../../images/book2.png";
import Firstbook3 from "../../images/book3.png";
import { useState } from "react";

const Slider = () => {
  const [slideindex, setslideindex] = useState(0);

  const handleclick = (direction) => {
    if (direction === "left") {
      setslideindex(slideindex > 0 ? slideindex - 1 : 2);
    } else {
      setslideindex(slideindex < 2 ? slideindex + 1 : 0);
    }
  };
  return (
    <div className="slider-container">
      <i
        onClick={() => handleclick("left")}
        className="bi bi-chevron-double-left  arrow-left"
      ></i>

      <div
        style={{ transform: `translateX(${slideindex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slider first-slide">
          <div className="slide-img-wrapper">
            <img src={Firstbook1} />
          </div>
          <div className="slider-info-wrapper">
            <h1 className="slider-info-title">Book Store</h1>
            <p className="slide-info-dis">
              Lorem, ipsum dolor sit amet consectetur nt!
            </p>
          </div>
        </div>
        <div className="slider secand-slide">
          <div className="slide-img-wrapper">
            <img src={Firstbook2} />
          </div>
          <div className="slider-info-wrapper">
            <h1 className="slider-info-title">Book Store</h1>
            <p className="slide-info-dis">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="slider therd-slide">
          <div className="slide-img-wrapper">
            <img src={Firstbook3} />
          </div>
          <div className="slider-info-wrapper">
            <h1 className="slider-info-title">Book Store</h1>
            <p className="slide-info-dis">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <i
        onClick={() => handleclick("right")}
        className="bi bi-chevron-double-right  arrow-right"
      ></i>
    </div>
  );
};

export default Slider;
