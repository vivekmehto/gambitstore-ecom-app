import { useState, useEffect } from "react";
import Axios from "axios";

const useProductData = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const { data } = await Axios("/api/products");
        console.log(data.products);
        setProductData(data.products);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return productData;
};

export default useProductData;
