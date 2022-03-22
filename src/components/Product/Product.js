import "./style.css";

const Product = ({ details }) => {
  return (
    <div className="card card-small">
      {details.badge !== "" && (
        <div className="badge-text bc-p">{details.badge}</div>
      )}
      <button className="btn-card btn-heart">
        <i className="fas fa-heart"></i>
      </button>
      <div className="card-img flex flex-center">
        <img
          className="img-responsive"
          src={details.imgUrl}
          alt={details.title}
        />
      </div>

      <div className="card-header">
        <div className="card-title">
          <p className="fw-b">{details.title}</p>
        </div>
        <div className="card-text">
          <p className="fw-b">{`Rs. ${details.price}`}</p>
          <p className="text-lt text-p-color">{`Rs. ${details.originalPrice}`}</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-light fw-b btn-sm btn-block">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
