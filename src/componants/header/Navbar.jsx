import {Link}from "react-router-dom"
const Navbar = ({toggle,settoggle}) => {
    return (
    <nav style={{left:toggle && "0"} } className="navbar">
        <ul className="navbar-links">
            <Link to="/" onClick={()=>settoggle(false)} className="navbar-link">Home</Link>
            <Link to="/authors" onClick={()=>settoggle(false)} className="navbar-link">Auther</Link>
            <Link to="/about" onClick={()=>settoggle(false)} className="navbar-link">About Us</Link>
            <Link to="/contact" onClick={()=>settoggle(false)} className="navbar-link">Contact Us</Link>
            <Link to="/register" onClick={()=>settoggle(false)} className="navbar-link">Register</Link>
        </ul>
    </nav>  );
}
 
export default Navbar ;