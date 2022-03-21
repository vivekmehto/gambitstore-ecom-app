import { Route, Routes } from "react-router-dom";
import {
  Home,
  Wishlist,
  ProductListing,
  Cart,
  LoginPage,
  SignupPage,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
