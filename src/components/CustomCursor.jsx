import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'button' || 
          target.tagName.toLowerCase() === 'a' ||
          target.closest('button') ||
          target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-main hidden lg:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(147, 51, 234, 0.5)' : 'rgba(255, 255, 255, 0.5)',
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
      <motion.div
        className="cursor-blur hidden lg:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 2 : 1.2,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.1
        }}
      />
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        
        .cursor-main {
          pointer-events: none;
          position: fixed;
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(1px);
          border-radius: 50%;
          z-index: 9999;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
        }
        
        .cursor-blur {
          pointer-events: none;
          position: fixed;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0) 70%);
          border-radius: 50%;
          z-index: 9998;
          transform: translate(-50%, -50%);
        }

        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
