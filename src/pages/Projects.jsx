import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Coal Extraction Expansion",
      location: "Emalahleni Basin",
      status: "Completed",
      desc: "Large-scale expansion improving output efficiency and safety compliance.",
    },
    {
      title: "Rail Logistics Upgrade",
      location: "Mpumalanga Corridor",
      status: "Ongoing",
      desc: "Modernization of transport infrastructure for mineral distribution.",
    },
    {
      title: "Green Mine Rehabilitation",
      location: "GEM Site 3",
      status: "Sustainability",
      desc: "Land restoration and ecosystem recovery initiative.",
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
          Projects
        </motion.h1>

        <p className="mt-6 text-slate-400 max-w-2xl">
          Strategic mining and infrastructure developments driving GEM’s operational growth.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                p-8 rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                transition
              "
            >
              <span className="text-amber-400 text-sm uppercase tracking-widest">
                {p.status}
              </span>

              <h3 className="mt-3 text-xl font-bold">{p.title}</h3>

              <p className="text-sm text-slate-400 mt-1">{p.location}</p>

              <p className="mt-4 text-slate-300">{p.desc}</p>
            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Projects;