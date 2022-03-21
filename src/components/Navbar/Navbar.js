import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <header className="head">
      <h1 className="logo">
        <Link to="/">♞GamBit Store</Link>
      </h1>

      <form className="header-search">
        <input type="text" name="search-box" id="search" placeholder="Search" />
        <button className="btn btn-primary" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-user-circle header-icon"></i> Login
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <i className="fas fa-solid fa-heart header-icon"></i>Whishlist
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart header-icon"></i>Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
