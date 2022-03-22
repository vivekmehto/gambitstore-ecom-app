import { Link } from "react-router-dom";
import { useCategoryData } from "../../utils";
import "./style.css";

const HeaderSection = () => {
  const categories = useCategoryData();
  return (
    <>
      <aside className="category-list">
        {categories.map(({ _id, categoryName, imgUrl }) => (
          <div className="category-topic" key={_id}>
            <Link to="/products">
              <img
                className="category-img img-responsive"
                src={imgUrl}
                alt={categoryName}
              />
              <p className="m-05 text-up fw-b">{categoryName}</p>
            </Link>
          </div>
        ))}
      </aside>

      <main className="main-store">
        <div className="hero-container">
          <div className="hero-head">
            <h1 className="head-1">Exclusive Chess Products</h1>
            <Link to="/products" className="btn btn-lg">
              {" "}
              SHOP NOW{" "}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeaderSection;
