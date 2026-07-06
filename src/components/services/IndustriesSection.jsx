import { motion } from "framer-motion";

import {
  FaIndustry,
  FaMountain,
  FaBolt,
  FaOilWell,
  FaBuilding,
  FaTruck,
} from "react-icons/fa6";

/* =========================
   DATA
========================= */

const industries = [
  {
    icon: FaMountain,
    title: "Mining & Extraction",
    description:
      "Supporting large-scale mining operations with reliable extraction, logistics and operational efficiency.",
  },
  {
    icon: FaIndustry,
    title: "Heavy Industry",
    description:
      "Delivering engineering and infrastructure support for industrial-scale production environments.",
  },
  {
    icon: FaBolt,
    title: "Energy Sector",
    description:
      "Powering energy-related infrastructure and supporting sustainable energy development systems.",
  },
  {
    icon: FaOilWell,
    title: "Resources & Minerals",
    description:
      "Optimising resource extraction processes for maximum efficiency and environmental responsibility.",
  },
  {
    icon: FaBuilding,
    title: "Infrastructure",
    description:
      "Developing roads, plants, and industrial infrastructure critical to mining operations.",
  },
  {
    icon: FaTruck,
    title: "Logistics",
    description:
      "Ensuring seamless transport and supply chain movement for mining and industrial materials.",
  },
];

/* =========================
   MOTION SYSTEM
========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   COMPONENT
========================= */

function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-36 text-white">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.4em] text-amber-400"
          >
            Industries We Serve
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-5xl font-black lg:text-6xl"
          >
            Powering Critical
            <br />
            Sectors
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl leading-9 text-slate-400"
          >
            GEMR supports multiple industrial sectors with scalable mining,
            engineering and infrastructure solutions built for performance and sustainability.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div className="mt-28 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {industries.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={isLeft ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="
                  group relative
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  p-10
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-amber-400/20
                  hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]
                "
              >

                {/* ICON WRAPPER */}
                <div className="
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  bg-amber-500/10
                  transition
                  group-hover:bg-amber-500/15
                ">
                  <Icon className="text-3xl text-amber-400" />
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-6 leading-8 text-slate-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}export default IndustriesSection;