import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    number: 20,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 150,
    suffix: "+",
    title: "Employees",
  },
  {
    number: 50,
    suffix: "+",
    title: "Projects",
  },
  {
    number: 100,
    suffix: "%",
    title: "Safety Focus",
  },
];

function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: .8,
      }}
      className="
      absolute
      left-1/2
      bottom-10
      -translate-x-1/2
      w-[92%]
      max-w-7xl
      "
    >
      <div
        className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-6
        "
      >
        {stats.map((item) => (
          <div
            key={item.title}
            className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            p-8
            text-center
            hover:bg-white/20
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-2xl
            "
          >
            <h2 className="text-5xl font-black text-amber-400">
              <CountUp
                end={item.number}
                duration={3}
              />
              {item.suffix}
            </h2>

            <p className="mt-3 text-slate-200">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default HeroStats;