import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Update active section based on current path
    const currentPath = location.pathname.slice(1) || "home";
    setActiveSection(currentPath);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavigation = (e, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <div>
      <AnimatePresence>
        {visible && (
          <motion.nav
            className="fixed left-0 right-0 top-4 z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            style={{
              zIndex: 1000,
            }}
          >
            {/* Desktop Menu */}
            <motion.div
              className={`mx-auto hidden max-w-4xl items-center justify-center rounded-xl border border-white/10 py-3 backdrop-blur-lg lg:flex
                                ${
                                  scrolled
                                    ? "bg-black/30 shadow-lg"
                                    : "bg-black/10"
                                }
                                transition-all duration-300`}
              animate={{
                backgroundColor: scrolled
                  ? "rgba(0, 0, 0, 0.3)"
                  : "rgba(0, 0, 0, 0.1)",
              }}
              style={{
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            >
              <div>
                <ul className="flex items-center gap-8">
                  {NAVIGATION_LINKS.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Link
                        className={`relative text-lg font-medium transition-colors duration-300
                                                    ${
                                                      activeSection ===
                                                      item.href.slice(1)
                                                        ? "text-purple-400"
                                                        : item.href === "/"
                                                        ? "bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-indigo-300"
                                                        : "text-white hover:text-purple-300"
                                                    }`}
                        to={item.href}
                      >
                        {item.label}
                        {activeSection === item.href.slice(1) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 h-0.5 w-full bg-purple-400"
                            layoutId="underline"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Mobile Menu */}
            <div
              className={`mx-4 rounded-xl backdrop-blur-md lg:hidden ${
                scrolled ? "bg-black/30" : "bg-black/10"
              }`}
            >
              <div className="flex items-center justify-between p-4">
                <motion.button
                  className="focus:outline-none"
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isMobileMenuOpen ? "close" : "open"}
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isMobileMenuOpen ? (
                        <FaTimes className="h-6 w-6 text-purple-400" />
                      ) : (
                        <FaBars className="h-6 w-6 text-white" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </div>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileMenuVariants}
                    className="overflow-hidden"
                  >
                    <motion.ul className="space-y-4 p-4">
                      {NAVIGATION_LINKS.map((item, index) => (
                        <motion.li
                          key={index}
                          variants={menuItemVariants}
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            to={item.href}
                            className={`block w-full text-lg font-medium transition-colors duration-300
                              ${
                                activeSection === item.href.slice(1)
                                  ? "text-purple-400"
                                  : "text-white"
                              }`}
                            onClick={(e) =>
                              handleMobileNavigation(e, item.href)
                            }
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <Outlet />
    </div>
  );
};

export default Navbar;
