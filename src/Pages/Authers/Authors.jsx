import "./Authors.css";

import { authors } from "./../../data/authors";
import { useState } from "react";
import { books } from "../../data/books";
import { Link } from "react-router-dom";
const Authors = () => {
  const [search, setsearch] = useState("");
  const [searchh, setsearchh] = useState("");
  return (
    <div className="authors">
      <div className="authors-search">
        <input
          type="search"
          placeholder="search"
          name=""
          id=""
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>

      <div className="authors-item">
        {authors
          .filter((authors) =>
            authors.name.toLocaleLowerCase().includes(search)
          )
          .map((d) => (
            <Link to={`/book/${d.id}`} className="author" key={d.id}>
              <img src={d.image} className="authors-img"/>
              <div className="athors-title">{d.name}</div>
            </Link>
          ))}
      </div>

      <div className="authors-search">
        <input
          type="search"
          placeholder="search"
          name=""
          id=""
          value={searchh}
          onChange={(e) => setsearchh(e.target.value)}
        />
      </div>

      <div className="authors-item">
        {books
          .filter((books) => books.title.toLocaleLowerCase().includes(searchh))
          .map((d) => (
            <Link to={`/book/${d.id}`} key={d.id} className="author book-title">
              <img src={`/books/${d.image}`} className="authors-img" />
              <h1 className="bookss-title">{d.title}</h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Authors;
