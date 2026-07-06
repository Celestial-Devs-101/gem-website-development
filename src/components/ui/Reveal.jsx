import { motion } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  y = 40,
  x = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: .25,
      }}
      transition={{
        duration: .8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;