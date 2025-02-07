import { assets } from "@/Assets/Nextjs-blog-assets/Assets/assets";
import Image from "next/image";
import React from "react";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} height={100} alt="" />
      </div>
      <div className="w-26 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0"></div>
        
        {/* Adding 2px left margin and reducing gap between links */}
        <Link href='/admin/addProduct' className="ml-6  flex items-center border border-black gap 4 font-medium px-4 py-3 bg-white shadow-[-5px_5px_0px_#000000]">
          <Image src={assets.add_icon} alt="" width={25} height={25} /><p>Add blogs</p>
        </Link>
        
        <Link href='/admin/blogList' className="ml-6 mt-2 flex items-center border border-black gap-4 font-medium px-4 py-3 bg-white shadow-[-5px_5px_0px_#000000]">
          <Image src={assets.blog_icon} alt="" width={25} height={25} /><p>Blog lists</p>
        </Link>
        
        <Link href='/admin/subscriptions' className="ml-6 mt-2 flex items-center border border-black gap-4 font-medium px-4 py-3 bg-white shadow-[-5px_5px_0px_#000000]">
          <Image src={assets.email_icon} alt="" width={25} height={25} /><p>Subscriptions</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
