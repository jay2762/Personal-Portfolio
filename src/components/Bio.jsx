import { BIO } from "../constants";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";

const Bio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const paragraphVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="flex max-w-5xl flex-col gap-16 pt-24 pb-16 mx-auto px-6 relative"
      id="bio"
    >
      {/* Background gradient blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/10 to-transparent pointer-events-none" />

      <AnimatedHeading title="Bio" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-8"
      >
        {BIO.map((bio, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-3xl"
            variants={paragraphVariants}
          >
            <motion.div
              className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full opacity-0"
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 0.5, height: "100%" }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            />
            <motion.p
              className="text-lg lg:text-xl text-center leading-relaxed px-6 py-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm"
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.4 },
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.3 }}
              >
                {bio}
              </motion.span>
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Bio;
