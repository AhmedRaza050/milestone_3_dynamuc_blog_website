"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";
import Image from "next/image";

const posts = [
  {
    id: '1',
    title: "Future of AI in Pakistan",
    description:"The future of AI in Pakistan looks promising as the country increasingly embraces artificial intelligence to drive innovation, improve public services, and boost economic growth. With a growing tech ecosystem and an expanding pool of skilled professionals, Pakistan has the potential to become a leader in AI research and applications. AI can revolutionize industries such as agriculture, healthcare, education, and manufacturing, improving efficiency, reducing costs, and creating new opportunities for businesses and startups. However, to fully realize the potential of AI, Pakistan needs to invest in infrastructure, education, and policy development while encouraging collaborations with global AI leaders. As AI continues to evolve, Pakistan is well-positioned to integrate these advancements into its economy and society, shaping a tech-driven future.",
   
    imageUrl:"/images/FutureofPakistan.webp"
  },
  {
    id: "2",
    title: "Fitness and Health",
    description:
      "Fitness is not just about physical health but a holistic approach to well-being that encompasses mental clarity and emotional stability. Engaging in regular exercise, such as weightlifting, running, or yoga, helps improve cardiovascular health, build strength, and enhance flexibility. Beyond the physical benefits, fitness acts as a powerful stress reliever and mood enhancer by releasing endorphins. Adopting a balanced diet and maintaining consistency in workouts can further amplify the results, making fitness a cornerstone of a vibrant and fulfilling life. Whether at the gym, outdoors, or at home, staying active paves the way to a healthier future.",
    imageUrl: "/images/fitness.webp",
  },
  {
    id: "3",
    title: "Impact of Vaping on Youth",
    description:
      "Vaping has emerged as a popular trend among youth, often perceived as a safer alternative to smoking. However, its effects are far from harmless. The use of e-cigarettes exposes young individuals to addictive substances like nicotine, which can disrupt brain development and lead to long-term dependency. Beyond addiction, vaping has been linked to respiratory issues, heart complications, and an increased risk of developing chronic diseases. The flavored e-liquids, which appeal to younger audiences, mask the potential dangers, fostering a false sense of security. Raising awareness and implementing strict regulations are crucial to combating the growing vaping epidemic among the youth and protecting their future health.",

    imageUrl: "/images/vaping.webp",
  },
  {
    id: "4",
    title: "Building a Business for  Growth and Sustainability",
     description:"Running a successful business requires a blend of strategic planning, innovation, and adaptability. In today's competitive landscape, understanding market trends and customer needs is paramount. Businesses must conduct thorough market research and maintain a keen awareness of industry shifts to stay ahead. Leveraging technology and data analytics can provide valuable insights to make informed decisions and streamline operations, enabling companies to optimize efficiency and reduce costs.Building a strong team and fostering a positive company culture are equally vital, as motivated employees drive growth and success. Creating opportunities for professional development, recognizing achievements, and maintaining open communication channels can significantly boost employee morale and retention. Additionally, focusing on sustainability and social responsibility not only enhances brand reputation but also creates long-term value for stakeholders.Customer satisfaction remains the cornerstone of a thriving business. Establishing trust, delivering quality products or services, and prioritizing after-sales support foster customer loyalty and generate positive word-of-mouth referrals. By embracing innovation, investing in talent, and maintaining a customer-centric approach, businesses can navigate challenges, seize opportunities, and secure a competitive edge in a dynamic marketplace.",
    imageUrl: "/images/bussiness.webp",
  },
  {
    id: "5",
    title: "Exploring the World: The Joys and Growth of Travel",
    description:
      "Travel is an enriching experience that broadens horizons and creates lasting memories. Exploring new destinations allows individuals to immerse themselves in different cultures, savor diverse cuisines, and marvel at natural wonders. It opens doors to learning about history, traditions, and ways of life that may be vastly different from one’s own, fostering empathy and global awareness.Whether it's a serene beach getaway, a bustling city adventure, or a trek through majestic mountains, travel offers opportunities for relaxation, discovery, and personal growth. Adventure enthusiasts can challenge themselves with thrilling activities like scuba diving, rock climbing, or safaris, while those seeking peace can find solace in tranquil retreats or remote villages.Beyond the thrill of exploration, travel fosters a deeper appreciation for the world's diversity and inspires connections with people from all walks of life. Meeting locals, sharing stories, and building friendships along the way add a human touch to every journey. It’s also a time to create unforgettable memories with family and friends, strengthening bonds through shared experiences.Embarking on a journey, near or far, is a gateway to unparalleled experiences and stories worth sharing. It not only rejuvenates the soul but also leaves travelers with a renewed perspective on life, making every trip a meaningful chapter in the story of their lives.",

    imageUrl: "/images/travel.jpeg",
  },
  {
    id: "6",
    title: "Unlocking Your Potential: The Journey of Self-Development",
    description:
      "Self-development is a lifelong journey that involves the continuous pursuit of personal growth, learning, and transformation. It’s about actively improving various facets of your life, including your physical health, mental clarity, emotional intelligence, and spiritual well-being. At the heart of self-development is self-awareness—understanding your strengths, weaknesses, values, and aspirations. Setting clear and meaningful goals, and embracing challenges, are fundamental steps in this process. These goals serve as roadmaps for growth, pushing you to step outside your comfort zone and overcome obstacles. Cultivating a growth mindset—believing that your abilities can improve with effort and persistence—helps you view setbacks not as failures but as opportunities to learn and grow. Additionally, developing positive habits, such as regular exercise, mindfulness, and consistent learning, can have a profound impact on your journey. These small, daily actions accumulate over time, contributing to long-term progress. Self-development also requires prioritizing mental and emotional health, as a balanced mindset is essential for navigating life's challenges. By regularly reflecting on your thoughts and behaviors, you can assess your progress, adjust your course, and stay focused on your goals. Above all, self-development is about resilience—the ability to learn from mistakes, adapt, and continue moving forward. The pursuit of knowledge and new experiences enhances your personal growth, broadening your perspective and empowering you to become the best version of yourself. Through perseverance and self-reflection, self-development enables you to lead a more fulfilling, meaningful life, unlocking your true potential and enriching every aspect of your existence.",

    imageUrl: "/images/selfDevelopment.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-3xl font-bold text-center mt-10">Page Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-950 text-center">
        {post.title}
      </h1>
      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-800">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection  />
      <AuthoreCard />
    </div>
  );
}

