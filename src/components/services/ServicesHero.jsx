import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaHelmetSafety,
  FaIndustry,
  FaChartLine,
  FaMountain,
} from "react-icons/fa6";

import miningHero from "../../assets/images/mining-hero.jpg";

/* =========================
   DATA
========================= */

const stats = [
  {
    value: "20+",
    label: "Years Experience",
    icon: FaIndustry,
  },
  {
    value: "100%",
    label: "Safety Focused",
    icon: FaHelmetSafety,
  },
  {
    value: "24/7",
    label: "Operations",
    icon: FaChartLine,
  },
];

/* =========================
   MOTION SYSTEM
========================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   COMPONENT
========================= */

export function ServicesHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND IMAGE */}
      <img
        src={miningHero}
        alt="Mining Operations"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

      {/* GLOW */}
      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[170px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-40 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <span className="inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-amber-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            <FaMountain />
            Mining Services
          </span>

          <h1 className="mt-10 text-6xl font-black leading-tight lg:text-8xl">
            Engineering
            <br />
            The Future
            <br />
            Of Mining
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-slate-300">
            Greater eMalahleni Mineral Revolution delivers world-class mining,
            engineering and infrastructure solutions through innovation,
            operational excellence and uncompromising safety standards.
          </p>

          <div className="mt-14 flex flex-wrap gap-6">

            <Link
              to="/contact"
              className="group flex items-center gap-4 rounded-2xl bg-amber-500 px-8 py-5 font-bold text-slate-900 transition hover:-translate-y-1 hover:bg-amber-400"
            >
              Request Proposal
              <FaArrowRight className="transition group-hover:translate-x-2" />
            </Link>

            <Link
              to="/about"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-semibold backdrop-blur-xl transition hover:border-amber-500 hover:bg-white/10"
            >
              Learn More
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >

          <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

            <h3 className="text-3xl font-black">
              Delivering Excellence
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              Combining engineering expertise, advanced mining technologies and
              sustainable operational practices to maximise productivity while
              protecting people, communities and the environment.
            </p>

            {/* STATS */}
            <div className="mt-12 space-y-6">

              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="
                      flex items-center justify-between
                      rounded-2xl border border-white/10
                      bg-slate-900/70 p-6
                      transition
                    "
                  >

                    <div className="flex items-center gap-5">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
                        <Icon className="text-2xl text-amber-400" />
                      </div>

                      <div>
                        <h4 className="text-3xl font-black">
                          {item.value}
                        </h4>
                        <p className="text-slate-400">
                          {item.label}
                        </p>
                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ServicesHero;