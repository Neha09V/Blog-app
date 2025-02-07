import Image from 'next/image'
import { assets } from '@/Assets/Nextjs-blog-assets/Assets/assets'
import React from 'react'
import { useState } from 'react';


const Header = () => {

  const [email,setEmail] = useState("") ;
  const onSubmitHandler = async(e) => {
    e.preventDefault() ;
    const formData =new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email',formData) ;
     if(response.data.success) {
      toast.success(response.data.msg) ;
      setEmail("") ;
     }
     else {
      toast.error("Error") 
     }
  }
  return (
    <div className="py-4 px-5 md:px-5 lg:px-5 bg-gradient-to-r from-[#f4f7fc] to-[#3E5879]">
      <div className="flex justify-between items-center">
        {/* Enlarged logo with hover effect */}
        <Image
          src={assets.logo}
          width={200}
          height={100}
          alt="Logo"
          className="w-[150px] sm:w-[150px] transition-transform duration-300 transform hover:scale-105"
        />
        <button className="flex items-center gap-2 font-medium py-2 px-6 sm:py-3 sm:px-8 border border-solid border-black shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 bg-gradient-to-r from-[#3a8dfe] to-[#A6CDC6] text-white rounded-lg">
          Get Started
          <Image src={assets.arrow} width={20} height={20} alt="Arrow" />
        </button>
      </div>

      <div className="text-center my-16">
        {/* Updated "Latest Blogs" heading with a new gradient color */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[white] to-[#000000] leading-tight">
        "Inspire & Innovate"
        </h1>

        {/* Additional space between heading and paragraph */}
        <p className="mt-6 max-w-[500px] mx-auto text-lg sm:text-xl text-gray-500 font-light tracking-wide leading-relaxed">
          Immerse yourself in the latest posts where we explore the most exciting trends, share thought-provoking ideas, and provide expert insights. 
        </p>
        
        {/* Newsletter form with smooth design */}
        <form onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] mx-auto mt-8 border border-black shadow-xl rounded-lg bg-white"
          action=""
        >
          <input  onChange={(e) => setEmail(e.target.value)} value={email} type="email"placeholder="Enter your email"  className="pl-4 py-3 outline-none rounded-l-lg w-full text-lg font-medium"
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 rounded-r-lg bg-[7FC7D9] text-[#B9E5E8] hover:bg-[#4e89de] transition-all ease-in-out duration-300">
          
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
