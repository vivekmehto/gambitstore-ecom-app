import { useState, useEffect } from "react";
import Axios from "axios";

const useCategoryData = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const { data } = await Axios("/api/categories");
        console.log(data);
        setCategory(data.categories);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return category;
};

export default useCategoryData;
