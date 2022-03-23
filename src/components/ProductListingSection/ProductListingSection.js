import "./style.css";
import Product from "../Product/Product";
import { useProductData } from "../../utils";

const ProductListingSection = () => {
  const products = useProductData();
  return (
    <div className="product-section flex gap ">
      {products.map((p) => (
        <Product key={p._id} details={p} />
      ))}
    </div>
  );
};

export default ProductListingSection;
