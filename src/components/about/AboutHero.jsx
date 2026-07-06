import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/about-mine.jpg";function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Image */}

      <img
        src={heroImage}
        alt="GEMR Mining Operations"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Glow */}

      <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-amber-500/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="uppercase tracking-[0.35em] text-amber-400 font-semibold"
          >
            About GEMR
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .15, duration: .8 }}
            className="mt-8 text-6xl font-black leading-tight text-white lg:text-8xl"
          >
            Leading
            <br />
            South Africa's
            <br />
            Mineral Revolution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .35 }}
            className="mt-10 max-w-2xl text-xl leading-9 text-slate-300"
          >
            Greater eMalahleni Mineral Revolution combines responsible
            mining, engineering excellence and environmental stewardship
            to unlock sustainable economic growth for South Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .55 }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-5 font-bold text-slate-900 transition hover:-translate-y-1 hover:bg-amber-400"
            >
              Contact GEMR

              <FaArrowRight className="transition group-hover:translate-x-2" />

            </Link>

            <Link
              to="/projects"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-5 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
            >
              Explore Projects
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;