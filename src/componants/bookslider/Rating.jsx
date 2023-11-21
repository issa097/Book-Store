import "./Rating.css";

const ratings = ({ ratings,review}) => {
  return (
    <div className="ratings">
      {ratings >= 1 ? (
        <i className="bi bi-star-fill"></i>
      ) : ratings >= 0.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}

      {ratings >= 2 ? (
        <i className="bi bi-star-fill"></i>
      ) : ratings >= 1.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}
      {ratings >= 3 ? (
        <i className="bi bi-star-fill"></i>
      ) : ratings >= 2.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}
      {ratings >= 4 ? (
        <i className="bi bi-star-fill"></i>
      ) : ratings >= 3.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}
      {ratings >= 5 ? (
        <i className="bi bi-star-fill"></i>
      ) : ratings >= 4.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}
      <span className="review">({review} reviews)</span>
    </div>
  );
};

export default ratings;
