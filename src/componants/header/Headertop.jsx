import "./header.css";
import {Link}from "react-router-dom"

const Headertop = ({ settoggle, toggle }) => {
  return (
    <div className="header-top">
      <div
        onClick={() => settoggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>079-555-9999
      </div>

      <div className="header-top-text">Online Book Store</div>

      <Link to="/login" className="header-top-link">
        <i className="bi bi-person-fill"></i>
        login
      </Link>
    </div>
  );
};

export default Headertop;
