import { HERO } from "../constants";
import jayimg from "../assets/jay.jpeg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center relative pt-16 md:pt-0">
      <ParticleBackground />
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="my-8 mt-16 md:mt-8 py-2 text-4xl text-center font-bold md:text-5xl lg:text-[5rem]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {HERO.name}
        </motion.h2>

        <div className="block md:hidden">
          <motion.div className="flex flex-col items-center mb-8">
            <motion.img
              src={jayimg}
              width={450}
              height={450}
              alt="Jay Shah"
              className="rounded-3xl w-48 sm:w-64 md:w-72 lg:w-[400px] h-auto border-4 border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="flex gap-6 mt-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/jay-shah-83a8a8216/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-white hover:text-purple-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/jay2762"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-white hover:text-purple-400 transition-colors"
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          className="p-7 text-3xl tracking-tighter lg:text-4xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {HERO.greet}
        </motion.p>
        <motion.div
          className="bg-[#1a1625]/50 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-500/30 mx-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.p
            className="text-xl text-gray-300 leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {HERO.description}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:block w-full md:w-1/2 lg:p-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <motion.img
            src={jayimg}
            width={450}
            height={450}
            alt="Jay Shah"
            className="rounded-3xl w-48 sm:w-64 md:w-72 lg:w-[400px] h-auto border-4 border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="flex gap-6 mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/jay-shah-83a8a8216/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-white hover:text-purple-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/jay2762"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-white hover:text-purple-400 transition-colors"
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default hero;
