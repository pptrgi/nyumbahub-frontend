import { useReducedMotion, motion } from "framer-motion";

const FadeInAnimation = (props) => {
  const prefersReducedMotion = useReducedMotion();

  const viewport = { once: true, margin: "0px 0px -200px" };
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    />
  );
};

export default FadeInAnimation;
