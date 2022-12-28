import React from 'react';
import Blog_80 from './Blog_80';
import { useGlobalContext_80 } from '../Context_80';

const BlogList_80 = () => {
  const mainData = useGlobalContext_80();
  return (
    <div className='blogs-center'>
      {mainData.blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_80
            key={id}
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default BlogList_80;
