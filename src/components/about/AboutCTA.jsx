import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-amber-400">
            Join The Revolution
          </p>

          <h2 className="mt-8 text-6xl font-black text-white">
            Building South Africa's
            <br />
            Mining Future Together
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            Partner with Greater eMalahleni Mineral Revolution to
            deliver responsible mining, engineering excellence and
            sustainable development that creates lasting value.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 rounded-xl bg-amber-500 px-10 py-5 font-bold text-slate-900 transition hover:-translate-y-1 hover:bg-amber-400"
            >
              Contact GEMR

              <FaArrowRight className="transition group-hover:translate-x-2" />

            </Link>

            <Link
              to="/projects"
              className="rounded-xl border border-white/20 px-10 py-5 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Projects
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutCTA;