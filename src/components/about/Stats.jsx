import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 20,
    suffix: "+",
    title: "Years Experience",
  },
  {
    value: 500,
    suffix: "+",
    title: "Employees",
  },
  {
    value: 99,
    suffix: "%",
    title: "Safety Compliance",
  },
  {
    value: 18,
    suffix: "+",
    title: "Environmental Programmes",
  },
];

function Stats() {
  return (
    <section className="bg-slate-900 py-32 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
            >

             <h2 className="text-6xl font-black text-amber-400">
  {item.value}
  {item.suffix}
</h2>

              <p className="mt-5 text-lg text-slate-400">
                {item.title}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Stats;