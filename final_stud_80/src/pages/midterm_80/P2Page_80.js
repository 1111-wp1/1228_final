import { useState } from 'react';
import midterm_data_80 from '../../midterm_data_80';

const P2Page_80 = () => {
  const [products, setProducts] = useState(midterm_data_80);
  console.log('products', products);
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
              <button className='company-btn'>all</button>
              <button className='company-btn'>ikea</button>
              <button className='company-btn'>marcos</button>
              <button className='company-btn'>caressa</button>
            </article>
          </div>
        </div>
        <div className='products-right'>
          <div className='products-container'>
            {products.map((product) => {
              const { img, name, price } = product;
              return (
                <div className='single-product'>
                  <img
                    src={img}
                    className='single-product-img img'
                    alt='high-back bench'
                  />
                  <footer>
                    <h5 className='name'>{name}</h5>
                    <span className='price'>${price}</span>
                  </footer>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default P2Page_80;
