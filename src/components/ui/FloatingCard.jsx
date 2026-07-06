import { motion } from "framer-motion";

function FloatingCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: .35,
      }}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default FloatingCard;