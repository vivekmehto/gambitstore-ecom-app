import "./style.css";

const Sidebar = () => {
  return (
    <aside className="filter-list">
      <div className="filter-head flex">
        <p className="head-3">Filters</p>
        <button className="btn btn-dark btn-sm">Clear</button>
      </div>

      <div>
        <fieldset>
          <legend> Price: </legend>
          <input type="radio" id="highToLow" name="price" value="highToLow" />
          <label htmlFor="highToLow">High To Low</label>

          <input type="radio" id="lowToHigh" name="price" value="lowToHigh" />
          <label htmlFor="lowToHigh">Low To High</label>
        </fieldset>
      </div>

      <div>
        <fieldset>
          <legend>Filters</legend>
          <label htmlFor="fastDelivery">
            <input type="checkbox" name="fastDelivery" id="fastDelivery" />
            Fast Delivery
          </label>
          <label htmlFor="inStock">
            <input type="checkbox" name="inStock" id="inStock" />
            Out Of Stock
          </label>
        </fieldset>
      </div>
      <div className="list">
        <div className="list-title">Categories</div>
        <div className="checkbox">
          {/* {categories.map((category) => (
              <label className="checkbox-label" for={category.categoryName}>
                <input
                  id={category._id}
                  name={category.categoryName}
                  type="checkbox"
                />
                {category.categoryName}
              </label>
            ))} */}
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
