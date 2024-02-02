export const fadeOutStaggerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const accountPanelVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};
