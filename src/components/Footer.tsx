import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

        <div className="max-w-md">
          <div className="flex items-center gap-1 ">
                    <Image src="/images/logo.png" alt="logo" width={25} height={25}/>

          <h2 className="text-2xl font-bold  ">Build<span className="text-[#733eed]">OrBlog</span></h2></div>
          <p className="mt-4 text-sm leading-6 text-justify">
          Discover a hub for diverse topics and information conventions. From the latest trends to in-depth discussions, explore blogs that cover everything you need in one place.
          </p>
        </div>

        <div>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-black rounded-md outline-[#733eed]"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#733eed] text-white rounded-md hover:text-black hover:border-2 hover:bg-white hover:border-[#733eed] duration-300 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center mt-10 pt-5 text-sm">
        &copy;copyright 2024, BuildOrBlog
      </div>
    </footer>
  );
};

export default Footer;
