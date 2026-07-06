import { motion } from "framer-motion";const timeline = [
  {
    year: "2008",
    title: "Foundation",
    text: "Mining initiatives established within the Greater eMalahleni region.",
  },
  {
    year: "2012",
    title: "Expansion",
    text: "Operational capacity expanded through strategic partnerships.",
  },
  {
    year: "2018",
    title: "Engineering Growth",
    text: "Engineering and infrastructure services integrated into operations.",
  },
  {
    year: "2023",
    title: "Regional Development",
    text: "Community investment and environmental programmes accelerated.",
  },
  {
    year: "2026",
    title: "GEMR",
    text: "Rebranded as Greater eMalahleni Mineral Revolution.",
  },
];

function Timeline() {
  return (
    <section className="bg-slate-900 py-32 text-white">

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-amber-400">
            Our Journey
          </p>

          <h2 className="mt-6 text-5xl font-black">
            The GEMR Timeline
          </h2>

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-slate-400">
            Every milestone reflects our commitment to responsible mining,
            innovation and sustainable economic development.
          </p>

        </motion.div>

        <div className="relative mt-24">

          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-amber-500 via-amber-300 to-transparent" />

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
                className="relative ml-16"
              >

                <div className="absolute -left-[58px] top-2 h-8 w-8 rounded-full border-4 border-slate-900 bg-amber-400 shadow-lg shadow-amber-500/50" />

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:border-amber-400 hover:bg-white/10">

                  <p className="text-sm font-bold tracking-[0.3em] text-amber-400">
                    {item.year}
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Timeline;