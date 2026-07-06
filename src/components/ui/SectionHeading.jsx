import { motion } from "framer-motion";

function SectionHeading({
  subtitle,
  title,
  description,
  center = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className={center ? "text-center" : ""}
    >
      <span
        className="
          uppercase
          tracking-[0.25em]
          text-amber-400
          font-semibold
        "
      >
        {subtitle}
      </span>

      <h2 className="mt-4 text-5xl font-black">
        {title}
      </h2>

      {description && (
        <p
          className={`
            mt-6
            text-slate-400
            leading-8
            ${
              center
                ? "max-w-3xl mx-auto"
                : "max-w-2xl"
            }
          `}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;