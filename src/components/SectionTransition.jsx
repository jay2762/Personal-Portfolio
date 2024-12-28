import { motion } from "framer-motion";

const SectionTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "tween",
        duration: 0.2,
        ease: "easeOut"
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
