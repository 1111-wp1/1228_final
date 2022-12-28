import { useEffect, useState } from "react";
import Product_80 from "../../components/midterm_80/Product_80";
import midterm_data_80 from "../../midterm_data_80";
import Alert_80 from "../../components/Alert_80";
import { useGlobalContext_80 } from "../../Context_80";
const F4Page_80 = () => {
  const {
    searchName,
    setSearchName,
    products1,
    filterProducts1,
    clearAllProducts1,
    fetchAllProducts1,
    showAlert,
  } = useGlobalContext_80();
  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input
                type="text"
                value={searchName}
                onChange={(e) => {
                  setSearchName(e.target.value);
                }}
                className="search-input"
                placeholder="search..."
              />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button
                className="company-btn"
                onClick={() => filterProducts1("all")}
              >
                all
              </button>
              <button
                className="company-btn"
                onClick={() => filterProducts1("ikea")}
              >
                ikea
              </button>
              <button
                className="company-btn"
                onClick={() => filterProducts1("macros")}
              >
                marcos
              </button>
              <button
                className="company-btn"
                onClick={() => filterProducts1("caressa")}
              >
                caressa
              </button>
            </article>
            <button className="clear-btn" onClick={clearAllProducts1}>
              Clear All
            </button>
            <button className="fetch-btn" onClick={fetchAllProducts1}>
              Fetch All
            </button>
          </div>
        </div>
        {alert.show && <Alert_80 {...alert} removeAlert={showAlert} />}
        <div className="products-right">
          <div className="products-container">
            {products1.map((product) => {
              const { id, img, name, price } = product;
              return (
                <Product_80 key={id} img={img} name={name} price={price} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default F4Page_80;
