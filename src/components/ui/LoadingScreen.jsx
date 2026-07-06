import { motion } from "framer-motion";
import logo from "../../assets/images/branding/logo-full.png";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-slate-950
        overflow-hidden
      "
    >
      {/* Glow background pulse */}
      <motion.div
        className="
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          bg-amber-500/20
          blur-3xl
        "
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo reveal */}
      <motion.img
        src={logo}
        alt="Greater eMalahleni Mineral Revolution"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          w-72
          md:w-96
          drop-shadow-2xl
        "
      />

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="
          absolute
          bottom-20
          text-sm
          tracking-[0.3em]
          text-amber-400
        "
      >
        GREATER EMALAHLENI MINERAL REVOLUTION
      </motion.p>
    </motion.div>
  );
}

export default LoadingScreen;