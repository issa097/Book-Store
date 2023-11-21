import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";
import { useState ,useEffect } from "react";
const Login = () => {
  const [email, setemail] = useState("");
  const [paswoord, setpaswoord] = useState("");

//   const [showpaswoord, setshowpaswoord] = useState(false);
  const handeler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("email is requird");
    if (paswoord.trim() === "") return toast.error("paswoord is requird");
    console.log({ email, paswoord });

  
  };
    // showpass

    // const showhandeler = () => {
    //     setshowpaswoord((prev) => !prev);
    //   };

    useEffect(() => {
      localStorage.setItem("login", JSON.stringify({paswoord,email}));
  
      // if (localdata != null) {
      //   cartitemt = JSON.parse(localStorage.books);
      // } else {
      //   cartitemt = [];
      // }
    }, [paswoord,email]);

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
          value={paswoord}
          onChange={(e) => setpaswoord(e.target.value)}
          type="password"
          placeholder="Password"
        />
        {/* {showpaswoord ? (
          <i onClick={showhandeler} className="bi bi-eye-slash-fill"></i>
        ) : (
          <i onClick={showhandeler} className="bi bi-eye-fill"></i>
        )} */}

        <button  className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        don't have an account
        <Link to="/register" className="form-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
