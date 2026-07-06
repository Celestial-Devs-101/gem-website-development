import { motion } from "framer-motion";
import {
  FaHelmetSafety,
  FaLeaf,
  FaPeopleGroup,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa6";const values = [
  {
    icon: FaHelmetSafety,
    title: "Safety",
    text: "Zero harm remains the foundation of every operation.",
  },
  {
    icon: FaLeaf,
    title: "Sustainability",
    text: "Mining responsibly while protecting natural resources.",
  },
  {
    icon: FaPeopleGroup,
    title: "Community",
    text: "Empowering local communities through opportunity.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    text: "Modern technologies driving efficient operations.",
  },
  {
    icon: FaHandshake,
    title: "Integrity",
    text: "Transparency and accountability in everything we do.",
  },
  {
    icon: FaChartLine,
    title: "Growth",
    text: "Creating long-term economic value for South Africa.",
  },
];

function Values() {
  return (
    <section className="bg-slate-900 py-32 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-amber-400">
            Core Values
          </p>

          <h2 className="mt-6 text-5xl font-black">
            What Drives GEMR
          </h2>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {values.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500/10">

                  <Icon className="text-4xl text-amber-400" />

                </div>

                <h3 className="mt-8 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Values;