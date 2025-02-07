import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { blog_data } from '@/Assets/Nextjs-blog-assets/Assets/assets';
import BlogItem from './BlogItem';
import axios from 'axios'; // Import axios at the top


const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const[blogs, setBlogs] =useState([]);

  const fetchBlogs =async() =>{
    const response =await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs) ;
  }
  useEffect(() => {
    fetchBlogs() ;
  })

  return (
    <div>
      {/* Shortened header with less padding and margin */}
      <div className='flex justify-center gap-6 my-6'> {/* Reduced vertical space for compact header */}
        <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'text-gray-700 hover:bg-gray-200 py-1 px-4 rounded-sm'}>
          All
        </button>
        <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'text-gray-700 hover:bg-gray-200 py-1 px-4 rounded-sm'}>
          Technology
        </button>
        <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'text-gray-700 hover:bg-gray-200 py-1 px-4 rounded-sm'}>
          Startup
        </button>
        <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'text-gray-700 hover:bg-gray-200 py-1 px-4 rounded-sm'}>
          Lifestyle
        </button>
      </div>

      {/* Increased gap below the header */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:mx-10 mb-10'> {/* More space between header and sections */}
        {blog_data.filter((item) => menu === "All" ? true : item.category === menu)
          .map((item, index) => {
            return (
              <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
