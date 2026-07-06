import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>

      {visible && (

        <motion.button
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}
          transition={{
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.12,
            y: -4,
          }}
          whileTap={{
            scale: 0.92,
          }}
          onClick={scrollToTop}
          className="
            fixed
            bottom-8
            right-8
            z-[999]
            group
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-amber-400/30
              blur-xl
              group-hover:blur-2xl
              transition-all
              duration-300
            "
          />

          {/* Button */}

          <div
            className="
              relative
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-slate-900/90
              backdrop-blur-xl
              shadow-2xl
              transition-all
              duration-300
              group-hover:border-amber-400
              group-hover:bg-amber-400
            "
          >

            <FaArrowUp
              className="
                text-lg
                text-white
                transition-colors
                duration-300
                group-hover:text-slate-900
              "
            />

          </div>

        </motion.button>

      )}

    </AnimatePresence>
  );
}

export default BackToTop;