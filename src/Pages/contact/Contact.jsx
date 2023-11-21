import { useState , useEffect} from "react";
import "./Contact.css"
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {

    const [name, setname] = useState("");
    const [subject, setsubject] = useState("");
    const [email, setemail] = useState("");
    const [texta, settexta] = useState("");

    const handelerr =((e)=>{
        e.preventDefault()
    if (name.trim() === "") return toast.error("name is requird");
    if (subject.trim() === "") return toast.error("subject is requird");
    if (email.trim() === "") return toast.error("email is requird");
    if (texta.trim() === "") return toast.error("textarea is requird");

    })

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify({name,subject,email,texta,}));
    
        // if (localdata != null) {
        //   cartitemt = JSON.parse(localStorage.books);
        // } else {
        //   cartitemt = [];
        // }
      }, [name,subject,email,texta]);
    return ( 
       <section className="contact">
        <div className="contact-wrapper">
      <ToastContainer />

            <div className="contact-item">
                <div className="contact-item-icon">
                    <i className="bi bi-house-fill"></i>
                    Address
                </div>
                <p className="contact-item-text">
                    jordan-jordan
                </p>
            </div>
            <div className="contact-item">
                <div className="contact-item-icon">
                    <i className="bi bi-telephone-fill"></i>
                    Phone
                </div>
                <p className="contact-item-text">
                    j123456789
                </p>
            </div>
            <div className="contact-item">
                <div className="contact-item-icon">
                    <i className="bi bi-envelope"></i>
                   Email
                </div>
                <p className="contact-item-text">
                fak@gamil.com
                </p>
            </div>
        </div>

        <form onSubmit={handelerr} className="contact-form">
            <h2 className="contact-form-title">Contact Us </h2>
            <div className="contact-input-wrapper">
                <input onChange={(e) => setname(e.target.value)} value={name} type="text" placeholder="Name *" />
                <input onChange={(e) => setsubject(e.target.value)} value={subject} type="text" placeholder="subject *" />
                <input onChange={(e) => setemail(e.target.value)} value={email} type="email" placeholder="email *" />
            </div>
            <textarea  onChange={(e) => settexta(e.target.value)} value={texta} placeholder="your massge" name="" id="" cols="30" rows="10"></textarea>
            <button className="contact-btn">Send</button>
        </form>
       </section>
     );
}
 
export default Contact;