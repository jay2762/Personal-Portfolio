import { motion } from "framer-motion";
import { FaDownload, FaFilePdf, FaEye } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";
import { useEffect, useState } from "react";

const Resume = () => {
  const resumeUrl = "/Jay_Shah - Resume.pdf";

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="min-h-screen pt-20 pb-10" id="resume">
      <AnimatedHeading title="Resume" />

      <motion.div
        className="max-w-5xl mx-auto px-4 mt-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-[#1a1625]/50 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-500/30">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex justify-center gap-4 mb-6">
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaEye className="text-lg" />
                View Resume
              </motion.a>

              <motion.a
                href={resumeUrl}
                download="Jay_Shah - Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.a>
            </div>

            <div className="w-full h-[800px]">
              <iframe
                src={resumeUrl}
                className="w-full h-full rounded-lg"
                title="Resume Preview"
              />
            </div>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="flex flex-col items-center">
              {/* PDF Preview Box */}
              <motion.div
                className="w-64 h-64 mb-8 rounded-lg bg-[#1E1E1E] border-2 border-purple-500/30 shadow-[0_0_15px_rgba(147,51,234,0.3)] flex flex-col items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaFilePdf className="text-6xl text-purple-500/80 mb-4" />
                <p className="text-gray-400 text-sm">Jay_Shah - Resume.pdf</p>
                <button
                  className="mt-4 px-8 py-2 rounded-full bg-blue-500/80 text-white hover:bg-blue-600/80 transition-colors"
                  onClick={() => window.open(resumeUrl, "_blank")}
                >
                  Open
                </button>
              </motion.div>

              {/* Download Button */}
              <motion.a
                href={resumeUrl}
                download="Jay_Shah - Resume.pdf"
                className="flex items-center gap-2 px-8 py-3 border-2 border-cyan-400/50 rounded-full text-cyan-400 font-medium hover:bg-cyan-400/10 transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
