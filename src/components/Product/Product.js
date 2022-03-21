const Product = ({ details }) => {
  return (
    <div className="card">
      <div className="badge-text bc-p">{details.badge}</div>
      <button className="btn-card btn-heart">
        <i className="fas fa-heart"></i>
      </button>
      <div className="card-img">
        <img
          className="img-responsive"
          src={details.imgUrl}
          alt={details.title}
        />
      </div>

      <div className="card-header">
        <div className="card-title">
          <p>{details.title}</p>
          <p>{details.subTitle}</p>
        </div>
        <div className="card-text">
          <p className="fw-b">{`Rs. ${details.price}`}</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-light btn-sm btn-block">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
