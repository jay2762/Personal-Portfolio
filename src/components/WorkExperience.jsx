import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import AnimatedHeading from "./AnimatedHeading";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      <AnimatedHeading title="Work Experience" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-8 p-10 max-w-4xl mx-auto"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-6 backdrop-blur-sm
                     transform transition-all duration-300 hover:shadow-xl
                     hover:border-stone-50/50"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3
                  className="text-3xl font-semibold bg-gradient-to-r from-white to-stone-300 
                             bg-clip-text text-transparent"
                >
                  {experience.title}
                </h3>
                <p className="text-xl text-stone-200 p-1">
                  {experience.company}
                </p>
              </div>
              <p className="text-xl text-stone-300 mt-2 md:mt-0">
                {experience.duration}
              </p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-stone-300 "
            >
              {experience.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
