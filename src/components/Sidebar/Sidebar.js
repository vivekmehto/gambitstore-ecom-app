import "./style.css";
import { useCategoryData } from "../../utils";
const Sidebar = () => {
  const categories = useCategoryData();
  return (
    <aside className="filter-list flex flex-col gap-2">
      <div className="filter-head flex">
        <p className="head-3">Filters</p>
        <button className="btn btn-dark btn-sm">Clear</button>
      </div>

      <div className="flex flex-col gap">
        <div>
          <input type="radio" id="highToLow" name="price" value="highToLow" />
          {"  "} <label htmlFor="highToLow">High To Low</label>
        </div>
        <div>
          <input type="radio" id="lowToHigh" name="price" value="lowToHigh" />
          {"  "} <label htmlFor="lowToHigh">Low To High</label>
        </div>
      </div>

      <div className="flex flex-col gap">
        <label htmlFor="fastDelivery">
          <input type="checkbox" name="fastDelivery" id="fastDelivery" />
          {"  "}Fast Delivery
        </label>

        <label htmlFor="inStock">
          <input type="checkbox" name="inStock" id="inStock" />
          {"  "}Out Of Stock
        </label>
      </div>
      <div className="list">
        <div className="list-title">Categories</div>
        <div className="checkbox">
          {categories.map((category) => (
            <label
              className="checkbox-label"
              key={category._id}
              htmlFor={category.categoryName}
            >
              <input
                id={category._id}
                name={category.categoryName}
                type="checkbox"
              />
              {category.categoryName}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="price-range">
          Price:
          <input
            type="range"
            id="price-range"
            name="price-range"
            min="100"
            max="1000"
            step="100"
          />
          <span>price </span>
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
