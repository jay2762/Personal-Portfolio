import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { SKILLS } from "../constants";
import AnimatedHeading from "./AnimatedHeading";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const CardContent = ({ skill, isBack = false }) => (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <div className={`text-5xl ${isBack ? 'rotate-y-180' : ''}`}>
        {skill.icon}
      </div>
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        {isBack && (
          <p className="text-sm text-gray-200/90">
            {skill.description || "Experienced"}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden pt-20" id="skills">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/20 to-indigo-900/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        ref={ref}
        className="container relative mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatedHeading title="Skills" />
        <motion.div 
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8"
          variants={containerVariants}
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              className="group relative h-48"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ perspective: "1000px" }}
            >
              {/* Card Container */}
              <div 
                className="relative h-full w-full transition-transform duration-500"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: hoveredSkill === index ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600/90 to-purple-700/90 p-6 shadow-lg backdrop-blur-sm"
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                >
                  <CardContent skill={skill} />
                </motion.div>

                {/* Back Side */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-purple-700/90 to-indigo-600/90 p-6 shadow-lg backdrop-blur-sm"
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <CardContent skill={skill} isBack={true} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;