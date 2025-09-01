import React from "react";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, 
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export interface Short {
  type: "video";
  src: string;
  thumbnail?: string;
}

export interface Post {
  type: "image";
  src: string;
}

interface ShortsAndPostsProps {
  shorts?: Short[];
  posts?: Post[];
}

const ShortsAndPosts: React.FC<ShortsAndPostsProps> = ({
  shorts = [],
  posts = [],
}) => {
  return (
    <div>
      {/* Shorts Section */}
      {shorts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 mt-5">
          {shorts.map((short, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[22rem] md:h-[26rem] lg:h-[28rem] overflow-hidden shadow-md bg-gray-50 rounded-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              {short.type === "video" && (
                <iframe
                  className="w-full h-full object-cover rounded-lg"
                  src={`${short.src.replace("shorts", "embed")}?autoplay=1&mute=1`}
                  title={`Short ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {posts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="w-full h-[22rem] rounded-lg overflow-hidden shadow-md bg-gray-50"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              {post.type === "image" && (
                <img
                  src={post.src}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full "
                />
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShortsAndPosts;
