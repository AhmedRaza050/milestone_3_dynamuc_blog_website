import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to Build<span className="text-[#733eed]">OrBlog</span></h1>
        <p className="text-lg sm:text-xl mb-6 leading-relaxed text-center">
        Explore a world of stories, insights, and experiences that fuel inspiration.
          <br />
          From technology and lifestyle to travel and personal growth
          <br />
          we cover a wide range of topics to 
          <br />
          motivate and enlighten.
        </p>
        <Link href="/blog">
        <button className="outline outline-offset-8 outline-1 text-mywhite text-2xl font-bold group hover:rounded-3xl duration-300 hover:outline-[#733eed] hover:outline-4">
          Our Blogs
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
