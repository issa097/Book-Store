import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow Us At Social Media
        </div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-instagram"></i>
            <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
            <i style={{ color: "red" }} className="bi bi-youtube"></i>
            <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
            <i style={{ color: "darkblue" }} className="bi bi-telegram"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-tilte">Usfull Links </h3>
          <ul className="footer-links">
            <Link to="/"   className="footer-link">Home</Link>
            <Link to="/authors" className="footer-link">Aurther</Link>
            <Link to="/about"  className="footer-link">About us</Link>
            <Link  to="/contact" className="footer-link">contact us</Link>
            <Link  to="/register" className="footer-link">register</Link>
          </ul>
        </div>
      

        <div className="footer-links-item">
          <h3 className="footer-links-item-tilte">Contact Information</h3>
          <div className="footer-addres">
            <div className="footer-addres-item">
              <i className="bi bi-geo-alt-fill"></i>
              jordan - amman - jk
            </div>
            <div className="footer-addres-item">
              <i className="bi bi-telephone-fill"></i>
              123-123-132
            </div>
            <div className="footer-addres-item">
              <i className="bi bi-envelope-fill"></i>
              lkasdlkh@gmail.com
            </div>
          </div>
       
        </div>
        <div className="footer-links-item">
            <h3 className="footer-links-item-tilte">About Us </h3>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis odit veritatis pariatur possimus illum repudiandae
              sapiente repellendus nesciunt velit illo eligendi, ad expedita
              temporibus architecto ab magnam quisquam a dolorem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis odit veritatis pariatur possimus illum repudiandae
              sapiente repellendus nesciunt velit illo eligendi, ad expedita
              temporibus architecto ab magnam quisquam a dolorem?
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
