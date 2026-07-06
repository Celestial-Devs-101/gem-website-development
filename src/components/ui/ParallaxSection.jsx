import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxSection({
  children,
}) {
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 1000],
    [0, 120]
  );

  return (
    <motion.div
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

export default ParallaxSection;