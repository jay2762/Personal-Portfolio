import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Shake animation for form
      formRef.current.classList.add("shake");
      setTimeout(() => {
        formRef.current.classList.remove("shake");
      }, 650);
    } else {
      setErrors({});
      setIsSending(true);

      try {
        await emailjs.send(
          "service_p9bt6eo",
          "template_4cu9zn4",
          formData,
          "D8A8MFps1SnGYn-P0"
        );
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.log("FAILED...", error);
        toast.error("Failed to send message. Please try again later.");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <motion.div
      ref={formRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      id="contact"
    >
      <Toaster
        position="top-right"
        containerClassName="!mt-[8rem] md:!mt-[4rem]"
        toastOptions={{
          style: {
            background: "transparent",
            color: "#fff",
            fontSize: "1rem",
            padding: "0.5rem",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "transparent",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "transparent",
            },
          },
        }}
      />

      {/* Background Elements */}
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

      <div className="max-w-6xl mx-auto relative">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6"
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Let's Connect
          </motion.h2>
          <motion.div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-10 backdrop-blur-lg bg-white/5 p-12 rounded-3xl border border-white/20 shadow-xl"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div className="relative" variants={itemVariants}>
              <div className="relative">
                <FiUser
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                    focusedField === "name"
                      ? "text-purple-400"
                      : "text-gray-400"
                  }`}
                />
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-rose-400 mt-2"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <div className="relative">
                <FiMail
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                    focusedField === "email"
                      ? "text-purple-400"
                      : "text-gray-400"
                  }`}
                />
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-rose-400 mt-2"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div className="relative" variants={itemVariants}>
            <div className="relative">
              <FiMessageSquare
                className={`absolute left-3 top-3 transition-colors duration-300 ${
                  focusedField === "message"
                    ? "text-purple-400"
                    : "text-gray-400"
                }`}
              />
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows="5"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none resize-none"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-rose-400 mt-2"
                >
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSending}
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 hover:from-purple-500 hover:to-indigo-500 rounded-xl text-white font-medium shadow-lg shadow-purple-500/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative flex items-center justify-center gap-2">
              {isSending ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiSend className="text-lg" />
                  </motion.div>
                </>
              )}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.form>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-10px);
          }
          40% {
            transform: translateX(10px);
          }
          60% {
            transform: translateX(-10px);
          }
          80% {
            transform: translateX(10px);
          }
        }
        .shake {
          animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ContactForm;
