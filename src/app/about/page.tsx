import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 lg:px-16 py-10 lg:py-20 space-y-8 lg:space-y-0 lg:space-x-10">
   
      <div className="relative w-full lg:w-1/2 h-96">
        <Image
          src="/images/about.jpeg"
          alt="A vibrant collage of travel, technology, real estate, and more"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Discover the World of Exploring the All In One Blogs
        </h1>
        <p className="text-gray-600 leading-relaxed">
          At <strong>Exploring the All In One Blogs</strong>,we believe the world is filled with captivating topics just waiting to be discovered. Our goal is to provide you with diverse, high-quality content that educates, motivates, and entertains. 
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        Whether you are exploring the latest trends in real estate, diving into the realm of machine learning, or discovering the newest mobile technology, our blog is your trusted companion. We explore all subjects that spark curiosity and enrich your journey.</p>
        <p className="text-gray-600 leading-relaxed mt-4">
        Come along as we discover endless possibilities across travel, technology, real estate, and more. Lets learn, share, and grow together!
        </p>
      </div>
    </div>
  );
}
