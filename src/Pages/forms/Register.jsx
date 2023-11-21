import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";
import { useState , useEffect } from "react";

const Register = () => {
    const [email, setemail] = useState("");
    const [paswoord, setpaswoord] = useState("");
    const [user, setuser] = useState("");
  
    
    const handeler = (e) => {
      e.preventDefault();
      if (email.trim() === "") return toast.error("email is requird");
      if (user.trim() === "") return toast.error("user is requird");
      if (paswoord.trim() === "") return toast.error("paswoord is requird");
      console.log({ email, paswoord });
  
    
    };
      
      useEffect(() => {
        localStorage.setItem("register", JSON.stringify({paswoord,email,user}));
    
        // if (localdata != null) {
        //   cartitemt = JSON.parse(localStorage.books);
        // } else {
        //   cartitemt = [];
        // }
      }, [paswoord,email,user]);
  
    
  
    return (
      <div className="form-wrapper">
        <ToastContainer />
        <h1 className="form-title">login to your account</h1>
        <form onSubmit={handeler} className="form">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={user}
            onChange={(e) => setuser(e.target.value)}
            type="text"
            placeholder="User"
          />
          <input
            value={paswoord}
            onChange={(e) => setpaswoord(e.target.value)}
            type="password"
            placeholder="Password"
          />
         
  
          <button  className="form-btn">Login</button>
        </form>
        <div className="form-footer">
          don't have an account
          <Link to="/login" className="form-link">
           Login
          </Link>
        </div>
      </div>
    );
}
 
export default Register;