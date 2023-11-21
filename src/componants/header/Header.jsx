
import "./header.css";

import Headertop from "./Headertop";
import Headermiddle from "./Headermiddle";
import Navbar from "./Navbar";
import { useState } from "react";



const Header = () => {
    const [toggle, settoggle]=useState(false)
  return (
    <header className="header">
      <Headertop  settoggle={settoggle} toggle={toggle }/>
      <Headermiddle />
      <Navbar toggle={toggle } settoggle={settoggle}/>
    </header>
  );
};

export default Header;
