import { EDUCATION } from "../constants";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const EducationSection = () => {
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);

  const getUniversityUrl = (institution) => {
    if (institution.includes("UIC")) return "https://www.uic.edu/";
    if (institution.includes("PDEU")) return "https://www.pdpu.ac.in/";
    return null;
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: 45,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        delay: i * 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{ opacity, scale }}
      id="education"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6"
            animate={floatingAnimation}
          >
            Education Journey
          </motion.h2>
          <motion.div 
            className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
          style={{ y }}
        >
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group perspective-1000"
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl overflow-hidden"
                animate={{
                  rotateX: hoveredIndex === index ? [0, 2, 0] : 0,
                  transition: { duration: 0.6 },
                }}
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                    transition: { duration: 0.8 },
                  }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="w-36 h-36 mx-auto mb-6 rounded-2xl bg-white/10 p-4 backdrop-blur-lg border border-white/20 shadow-lg"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <a 
                      href={getUniversityUrl(edu.institution)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                      />
                    </a>
                  </motion.div>

                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3"
                    layout
                    transition={{ duration: 0.6 }}
                  >
                    {edu.degree}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-purple-200 mb-4"
                    layout
                    transition={{ duration: 0.6 }}
                  >
                    {edu.institution}
                  </motion.p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <motion.span 
                      className="px-3 py-1 text-sm bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-purple-100"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.4 }
                      }}
                    >
                      {edu.duration}
                    </motion.span>
                    <motion.span 
                      className="px-3 py-1 text-sm bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-purple-100"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.4 }
                      }}
                    >
                      {edu.CGPA}
                    </motion.span>
                  </div>

                  {getUniversityUrl(edu.institution) && (
                    <motion.a
                      href={getUniversityUrl(edu.institution)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-full backdrop-blur-sm border border-white/20 hover:from-purple-500/40 hover:to-indigo-500/40 transition-all duration-500 group"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.5 }
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        transition: { duration: 0.3 }
                      }}
                    >
                      Learn More
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        animate={{ 
                          x: hoveredIndex === index ? 5 : 0,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </motion.svg>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
