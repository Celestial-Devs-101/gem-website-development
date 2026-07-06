import { motion } from "framer-motion";

function News() {
  const news = [
    {
      title: "GEM Announces New Sustainability Initiative",
      date: "July 2026",
      desc: "A new environmental strategy aimed at reducing mining impact.",
    },
    {
      title: "Infrastructure Investment Expands Operations",
      date: "June 2026",
      desc: "Major upgrades to logistics and transport systems.",
    },
    {
      title: "Safety Record Reaches New Milestone",
      date: "May 2026",
      desc: "Zero major incidents recorded across key mining sites.",
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
          News & Updates
        </motion.h1>

        <p className="mt-6 text-slate-400 max-w-2xl">
          Latest announcements, corporate developments, and operational updates from GEM.
        </p>
      </section>

      {/* NEWS LIST */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-6">

        {news.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              p-6 rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              hover:bg-white/10
              transition
            "
          >
            <span className="text-amber-400 text-sm">{n.date}</span>
            <h3 className="text-xl font-bold mt-2">{n.title}</h3>
            <p className="text-slate-400 mt-2">{n.desc}</p>
          </motion.div>
        ))}

      </section>

    </div>
  );
}

export default News;