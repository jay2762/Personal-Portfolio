import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section className="pt-20" id="projects">
      <AnimatedHeading title="Projects" />
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 z-10 overflow-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl h-[300px] shadow-lg"
            variants={projectVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="hidden md:block">
              <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/70 backdrop-blur-sm">
                <motion.h3 className="mb-2 text-xl font-semibold">
                  {project.name}
                </motion.h3>
                <motion.div
                  className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.p
                    className="mb-8 px-4 text-sm text-center"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-1">
                      <span>
                        {project.id === 6 ? "View Website" : "View on GitHub"}
                      </span>
                      <MdArrowOutward />
                    </div>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
            <div className="block md:hidden">
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.h3
                  className="mb-2 text-xl font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.name}
                </motion.h3>
                <motion.p
                  className="mb-8 px-4 text-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.description}
                </motion.p>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-1">
                    <span>
                      {project.id === 6 ? "View Website" : "View on GitHub"}
                    </span>
                    <MdArrowOutward />
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
