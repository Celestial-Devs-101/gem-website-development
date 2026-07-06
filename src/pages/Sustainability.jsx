import { motion } from "framer-motion";
import { FaTree, FaRecycle, FaHandsHelping } from "react-icons/fa";

function Sustainability() {
  const pillars = [
    {
      icon: FaTree,
      title: "Environmental Protection",
      desc: "Minimizing environmental impact through responsible mining practices.",
    },
    {
      icon: FaRecycle,
      title: "Resource Efficiency",
      desc: "Optimizing resource usage and reducing operational waste.",
    },
    {
      icon: FaHandsHelping,
      title: "Community Development",
      desc: "Investing in local communities and socio-economic growth.",
    },
  ];

  return (
    <div className="pt-32 bg-slate-950 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black"
        >
          Sustainability
        </motion.h1>

        <p className="mt-6 text-slate-400 max-w-2xl">
          GEM is committed to environmental stewardship, responsible mining,
          and long-term sustainable development.
        </p>
      </section>

      {/* ESG PILLARS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                p-8 rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
              "
            >
              <p.icon className="text-emerald-400 text-3xl" />
              <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-slate-400">{p.desc}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-24 text-center bg-slate-900/40">
        <h2 className="text-4xl font-bold">
          Building a Greener Mining Future
        </h2>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
          Our operations are guided by strict environmental policies and
          continuous improvement frameworks aligned with global ESG standards.
        </p>
      </section>

    </div>
  );
}

export default Sustainability;