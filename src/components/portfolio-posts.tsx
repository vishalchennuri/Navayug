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
  // Determine if we should center the shorts based on count
  const shouldCenterShorts = shorts.length <= 3;

  return (
    <div>
      {/* Shorts Section - Mobile/Portrait Aspect Ratio (9:16) */}
      {shorts.length > 0 && (
        <div 
          className={`gap-4 mb-12 mt-5 ${
            shouldCenterShorts 
              ? `grid justify-center mx-auto max-w-4xl`
              : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
          }`}
          style={shouldCenterShorts ? { gridTemplateColumns: `repeat(${Math.min(shorts.length, 3)}, minmax(0, 1fr))` } : {}}
        >
          {shorts.map((short, index) => (
            <motion.div
              key={index}
              className="relative w-full overflow-hidden shadow-md bg-gray-50 rounded-lg"
              style={{ aspectRatio: '4/6' }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              {short.type === "video" && (
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
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

      {/* Posts Section - Square Aspect Ratio (1:1) - 2 per row on desktop */}
      {posts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="relative w-full rounded-lg overflow-hidden shadow-md bg-gray-50"
              style={{ aspectRatio: '1/1' }}
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
                  className="absolute inset-0 w-full h-full object-cover"
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