import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Wishlist, ProductListing, Cart, Login, Signup } from "./pages";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <Footer />

    // {/* <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/products" element={<ProductListing />} />
    //     <Route path="/wishlist" element={<Wishlist />} />
    //     <Route path="/cart" element={<Cart />} />
    //   </Routes>
    // </BrowserRouter> */}
  );
};

export default App;
