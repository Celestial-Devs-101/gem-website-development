import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaUsers,
  FaMountain,
  FaLeaf,
  FaTools,
} from "react-icons/fa";

const stats = [
  {
    icon: FaMountain,
    number: 25,
    suffix: "+",
    title: "Mining Projects",
  },
  {
    icon: FaUsers,
    number: 500,
    suffix: "+",
    title: "Employees",
  },
  {
    icon: FaLeaf,
    number: 18,
    suffix: "+",
    title: "Sustainability Initiatives",
  },
  {
    icon: FaTools,
    number: 99,
    suffix: "%",
    title: "Safety Compliance",
  },
];

function Statistics() {
  return (
    <section className="bg-slate-900 py-28 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.25em] text-amber-400 font-semibold">
            GEM BY THE NUMBERS
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Delivering Results
          </h2>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
            >

              <stat.icon className="mx-auto text-5xl text-amber-400" />

              <h3 className="mt-8 text-5xl font-black">
  {stat.number}
  {stat.suffix}
</h3>
              <p className="mt-4 text-slate-400">
                {stat.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;