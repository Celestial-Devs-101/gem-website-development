import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-36 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />

      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-amber-400 font-semibold"
        >
          Let's Build Together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-6xl font-black leading-tight"
        >
          Building Tomorrow's
          <br />
          Mining Industry Today.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300"
        >
          Whether you're seeking mining expertise, engineering
          solutions or sustainable development partnerships,
          GEM is ready to deliver world-class results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .35 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-center gap-6 md:flex-row"
        >

          <Link
            to="/contact"
            className="rounded-xl bg-amber-500 px-10 py-5 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Contact GEM
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-10 py-5 font-semibold hover:bg-white hover:text-slate-950 transition"
          >
            Explore Projects

            <FaArrowRight />

          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default CTASection;