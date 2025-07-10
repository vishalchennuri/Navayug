// utils/FadeInWhenVisible.tsx
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  animationType?: "fade" | "slideUp" | "slideLeft" | "zoom" | "flip";
}

const animationVariants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 },
  },
};

export default function FadeInWhenVisible({
  children,
  delay = 0,
  animationType = "slideUp", // Default remains slide+fade
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={animationVariants[animationType]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
