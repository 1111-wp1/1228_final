import { useState } from 'react';
import Product_80 from '../../components/midterm_80/Product_80';
import midterm_data_80 from '../../midterm_data_80';

const P3Page_80 = () => {
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
export default P3Page_80;
