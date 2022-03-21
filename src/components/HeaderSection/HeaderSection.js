import { Link } from "react-router-dom";
import "./style.css";

// TODO: to make category map and background img
const HeaderSection = () => {
  return (
    <>
      <aside className="category-list">
        <div className="category-topic">
          <Link to="/products">
            <i className="fa fa-regular fa-gift"></i>
            <p>Top Offers</p>
          </Link>
        </div>
        <div className="category-topic">
          <Link to="/products">
            <i className="fa fa-regular fa-book"></i>
            <p>Books</p>
          </Link>
        </div>
        <div className="category-topic">
          <Link to="/products">
            <i className="fa fa-regular fa-chess"></i>
            <p>Chess Set</p>
          </Link>
        </div>
        <div className="category-topic">
          <Link to="/products">
            <i className="fa fa-regular fa-book-open"></i>
            <p>Note Books</p>
          </Link>
        </div>
        <div className="category-topic">
          <Link to="/products">
            <i className="fa fa-regular fa-pen"></i>
            <p>Pens</p>
          </Link>
        </div>
      </aside>

      <main className="main-store">
        <div className="hero-container">
          <div className="hero-head">
            <h1 className="head-1">Exclusive Chess Products</h1>
            <Link to="/products"> SHOP NOW </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeaderSection;
