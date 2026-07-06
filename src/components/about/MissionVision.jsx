import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaShieldHalved,
} from "react-icons/fa6";function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-amber-400">
            Our Foundation
          </p>

          <h2 className="mt-6 text-5xl font-black">
            Mission • Vision • Purpose
          </h2>

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-slate-400">
            Everything we build begins with responsibility,
            innovation and sustainable growth.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500/10">

              <FaBullseye className="text-4xl text-amber-400" />

            </div>

            <h3 className="mt-8 text-3xl font-black">
              Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Deliver world-class mining and engineering
              solutions while maintaining the highest
              standards of safety, environmental
              responsibility and operational excellence.
            </p>

          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10">

              <FaEye className="text-4xl text-emerald-400" />

            </div>

            <h3 className="mt-8 text-3xl font-black">
              Vision
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              To become Southern Africa's benchmark for
              responsible mining, technological innovation
              and sustainable mineral development.
            </p>

          </motion.div>

          {/* Purpose */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-500/10">

              <FaShieldHalved className="text-4xl text-sky-400" />

            </div>

            <h3 className="mt-8 text-3xl font-black">
              Purpose
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Unlock South Africa's mineral wealth while
              creating lasting value for communities,
              employees, industry partners and future
              generations.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;