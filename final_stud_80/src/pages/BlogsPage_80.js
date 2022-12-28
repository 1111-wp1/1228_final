import React, { useState, useEffect, useContext } from 'react';
import data from '../blogData_80';
import BlogList_80 from '../components/BlogList_80';
import Alert_80 from '../components/Alert_80';
import { useGlobalContext_80 } from '../Context_80';

const BlogContext = React.createContext();

const Blogs_80 = () => {
  const { blogs, alert, removeItem, showAlert, clearBlogs, filterItems } =
    useGlobalContext_80();
  return (
    <section className='blogs'>
      {alert.show && <Alert_80 {...alert} removeAlert={showAlert} />}
      <div className='section-title'>
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className='filter-container'>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('all')}
        >
          all
        </button>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('lifestyle')}
        >
          lifestyle
        </button>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('travel')}
        >
          travel
        </button>
      </div>
      <div className='blogs-center'>
        <BlogList_80 key={1} />
      </div>
      <button className='clear-btn' onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
  );
};

export default Blogs_80;
