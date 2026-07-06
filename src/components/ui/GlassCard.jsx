import { motion } from "framer-motion";

function GlassCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default GlassCard;