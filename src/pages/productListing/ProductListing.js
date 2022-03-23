import { Navbar, Sidebar } from "../../components";
import ProductListingSection from "../../components/ProductListingSection/ProductListingSection";
const ProductListing = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <ProductListingSection />
      </div>
    </>
  );
};

export default ProductListing;
