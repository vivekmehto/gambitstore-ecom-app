import "./style.css";

const ProductCart = ({ details }) => {
  return (
    <div class="card card-horizontal">
      <div class="card-left">
        <div class="card-img">
          <img
            class="img-responsive"
            src={details.imgUrl}
            alt={details.title}
          />
        </div>
      </div>
      <div class="card-right">
        <div class="card-header">
          <div class="card-title">
            <p>{details.title} </p>
            <p>{details.subTitle}</p>
          </div>
          <div className="card-text">
            <p className="fw-b">{`Rs. ${details.price}`}</p>
          </div>
        </div>
        <div className="card-qty">
          <button className="minus-btn">-</button>
          <span className="qty-count">{details.quantity}</span>
          <button className="add-btn">+</button>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary btn-block">ADD TO WIHSLIST</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
