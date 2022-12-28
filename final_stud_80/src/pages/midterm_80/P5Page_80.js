import { useEffect, useState } from 'react';
import Alert_80 from '../../components/Alert_80';
import Product_80 from '../../components/midterm_80/Product_80';
import midterm_data_80 from '../../midterm_data_80';

const P5Page_80 = () => {
  const [products, setProducts] = useState(midterm_data_80);
  console.log('products', products);

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setProducts(midterm_data_80);
    } else {
      const newProducts = midterm_data_80.filter(
        (product) => product.category === category
      );
      setProducts(newProducts);
    }
  };

  const clearAllProducts = () => {
    showAlert(true, 'all products deleted', 'danger');
    setProducts([]);
  };

  const fetchAllProducts = () => {
    // showAlert(true, 'empty list', 'danger');
    setProducts(midterm_data_80);
  };

  return (
    <>
      <section className='main-section'>
        <div className='filter-left'>
          <div className='left-content'>
            <form className='input-form'>
              <input
                type='text'
                className='search-input'
                placeholder='search...'
              />
            </form>
            <h4>Company</h4>
            <article className='companies'>
              <button
                className='company-btn'
                onClick={() => filterItems('all')}
              >
                all
              </button>
              <button
                className='company-btn'
                onClick={() => filterItems('ikea')}
              >
                ikea
              </button>
              <button
                className='company-btn'
                onClick={() => filterItems('macros')}
              >
                marcos
              </button>
              <button
                className='company-btn'
                onClick={() => filterItems('caressa')}
              >
                caressa
              </button>
            </article>
            <button className='clear-btn' onClick={clearAllProducts}>
              Clear All
            </button>
            <button className='fetch-btn' onClick={fetchAllProducts}>
              Fetch All
            </button>
          </div>
        </div>
        {alert.show && <Alert_80 {...alert} removeAlert={showAlert} />}
        <div className='products-right'>
          <div className='products-container'>
            {products.map((product) => {
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
export default P5Page_80;
