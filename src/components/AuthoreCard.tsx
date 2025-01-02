import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthoreCard = () => {
  return (
    <div className=" shadow-sm border-2 border-gray-100 rounded-lg p-4 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          src={"/images/me.png"}
          alt=""
          width={100}
          height={100}
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-200"
        />
        <div>
          <h3 className="text-xl font-bold">AHMED RAZA</h3>
          <p className="text-xs backdrop:text-slate-100">
            Gen Ai Student &nbsp; | &nbsp; Front-End Developer
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 leading-relaxed text-justify">
        As a front-end developer, I design and develop websites and apps that
        are user-friendly and visually appealing. I enjoy combining creativity
        with technology to deliver seamless user experiences. I am passionate
        about continuous learning to enhance my skills and tackle new
        challenges, ensuring I stay ahead in both fields.
      </p>

      <div className="mt-4 flex space-x-1 -ml-3">
        <Link
          href="#"
          className="px-4 py-2 text-white bg-[#733eed] rounded-md hover:text-black hover:border-2 hover:bg-white hover:border-[#733eed] transition duration-300"
        >
          LinkedIn
        </Link>
        <Link
          href="#"
          className="px-4 py-2 text-white bg-[#733eed] rounded-md hover:text-black hover:border-2 hover:bg-white hover:border-[#733eed] transition duration-300"
        >
          GitHub
        </Link>
        <Link
          href="#"
          className="px-4 py-2 text-white bg-[#733eed] rounded-md hover:text-black hover:border-2 hover:bg-white hover:border-[#733eed] transition duration-300"
        >
          Facebook
        </Link>
      </div>
    </div>
  );
};

export default AuthoreCard;
