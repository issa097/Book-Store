import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../componants/bookslider/Rating";
import "./Book.css"
import Cart from './../cart/Cart';
import { useContext, useState } from "react";
import CartContext from "../../context/Cartcontext";
const Book = () => {
  const { id } = useParams();
  const book = books.find((d) => d.id === parseInt(id));
const{addtocart}=useContext(CartContext)
const [qty,setqty]=useState(1)
  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${book.image}`} alt={book.title} className="book-content-img" />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by: <span>{book.author}</span> (Author)
          </div>
          <Rating ratings={book.rating} review={book.reviews} />
          <div className="book-add-to-cart">
            <input
              min="0"
              max="100"
              type="number"
              className="book-add-to-cart-input"
              value={qty}
              onChange={e=> setqty(e.target.value)}
            />
            <button onClick={()=>addtocart({...book, quantity:qty})} className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia
        molestias, reprehenderit aspernatur labore quo iure cumque impedit
        laboriosam voluptate libero esse quia cum saepe numquam debitis iusto
        facilis obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nisi mollitia molestias, reprehenderit aspernatur labore quo iure
        cumque impedit laboriosam voluptate libero esse quia cum saepe numquam
        debitis iusto facilis obcaecati.
      </p>
      <div className="book-icons">
        <div className="book-icon">
            <small>Print lenght</small>
            <i className="bi bi-file-earmark-break"></i>
            <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
        <small>Language</small>

            <i className="bi bi-globe"></i>
            <b>{book.language} Pages</b>
        </div>
        <div className="book-icon">
        <small>Publication date</small>

            <i className="bi bi-calendar3"></i>
            <b>{book.PublicationDate} Pages</b>
        </div>
      </div>
    </div>
  );
};

export default Book;
