import React, { useState, useContext, useReducer, useEffect } from "react";
import data from "./blogData_80";
import midterm_data_80 from "./midterm_data_80";

import Alert_80 from "./components/Alert_80";

import Reducer_80 from "./Reducer_80";
import final_data_80 from "./final_data_80";

const AppContext_80 = React.createContext();

const initialState = {
  products2: midterm_data_80,
};

const AppProvider_80 = ({ children }) => {
  const [blogs, setBlogs] = useState(data);
  const [state, dispatch] = useReducer(Reducer_80, initialState);
  console.log("products2", state.products2);

  const [persons, setPersons] = useState(final_data_80);

  const [products1, filterProducts] = useState(midterm_data_80);
  console.log("products1", products1);
  const [searchName, setSearchName] = useState("");

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  console.log("blogs", blogs);

  // Blogs

  const removeItem = (id) => {
    showAlert(true, "blog removed", "danger");
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const clearAllProducts1 = () => {
    showAlert(true, "empty all blogs", "danger");
    filterProducts([]);
  };

  const filterProducts2 = (category) => {
    if (category === "all") {
      filterProducts2(midterm_data_80);
      } else {
        const newProducts = midterm_data_80.filter((product) => product.category === category);
      filterProducts2(newProducts);
    }
  };

  const fetchAllProducts1 = () => {
    filterProducts(midterm_data_80);
  };

  const clearAllPersons = () => {
    setPersons([]);
  };

  useEffect(() => {
    const filterProduct = midterm_data_80.filter((product) =>
      product.name.toLowerCase().includes(searchName.toLowerCase())
    );
    filterProducts(filterProduct);
  }, [searchName]);

  return (
    <AppContext_80.Provider
      value={{
        blogs,
        alert,
        persons,
        removeItem,
        showAlert,
        clearAllPersons,
        searchName,
        setSearchName,
        products1,
        filterProducts2,
        fetchAllProducts1,
        clearAllProducts1,
        showAlert,
        ...state
      }}
    >
      {children}
    </AppContext_80.Provider>
  );
};
// make sure use
export const useGlobalContext_80 = () => {
  return useContext(AppContext_80);
};

export { AppContext_80, AppProvider_80 };
