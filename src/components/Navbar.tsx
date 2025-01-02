"use client";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="text-slate-400 body-font my-2">
      <div className="container mx-auto flex flex-wrap p-2 flex-col  md:flex-row items-center">
        <div className="flex items-center text-black">
          <Image src="/images/logo.png" alt="logo" width={50} height={50}/>
          <h1 className="text-3xl font-bold ">Build<span className="text-[#733eed]">OrBlog</span></h1>
        </div>
        <nav className="md:ml-auto flex items-center flex-wrap justify-center text-black font-semibold text-xl">
          <Link
            href="/"
            className="mr-5 text-xl hover:text-[#733eed] hover:border-b-2 hover:border-[#733eed] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Home 
          </Link>  | &nbsp; 
          <Link
            href="/about"
            className="mr-5 text-xl hover:text-[#733eed] hover:border-b-2 hover:border-[#733eed] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>  | &nbsp; 
          <Link
            href="/blog"
            className="mr-5 text-xl hover:text-[#733eed] hover:border-b-2 hover:border-[#733eed] transition-all duration-300 ease-in-out transform hover:scale-105"
            >
            Blog
          </Link> | &nbsp; 
          <Link
            href="/contact"
            className="mr-5 text-xl hover:text-[#733eed] hover:border-b-2 hover:border-[#733eed] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </Link> &nbsp; 
        </nav>
      </div>
    </header>
  );
}
