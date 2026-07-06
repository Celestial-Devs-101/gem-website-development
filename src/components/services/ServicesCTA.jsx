import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaFileSignature,
} from "react-icons/fa";

import {
  FaHelmetSafety,
  FaLeaf,
  FaIndustry,
  FaHandshake,
} from "react-icons/fa6";

/* =========================
   DATA
========================= */

const highlights = [
  {
    icon: FaHelmetSafety,
    title: "Safety Driven",
    description:
      "International safety standards across every mining operation.",
  },
  {
    icon: FaLeaf,
    title: "Sustainable",
    description:
      "Responsible mining focused on future generations.",
  },
  {
    icon: FaIndustry,
    title: "Engineering Excellence",
    description:
      "Modern equipment backed by experienced professionals.",
  },
  {
    icon: FaHandshake,
    title: "Trusted Partner",
    description:
      "Long-term partnerships built on integrity and accountability.",
  },
];

/* =========================
   MOTION
========================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================
   COMPONENT
========================= */

function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-36 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            variants={fadeUp}
            className="uppercase tracking-[0.4em] font-semibold text-amber-400"
          >
            Let's Build The Future Together
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-8 text-5xl font-black leading-tight lg:text-7xl"
          >
            Ready To Start
            <br />
            Your Next Mining Project?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400"
          >
            Greater eMalahleni Mineral Revolution delivers world-class
            mining, engineering and infrastructure solutions focused on
            safety, innovation and sustainable growth.
          </motion.p>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-[42px] border border-white/10 bg-white/5 p-14 backdrop-blur-2xl lg:p-20"
        >
          <div className="grid gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="uppercase tracking-[0.25em] text-amber-400">
                Why Choose GEMR
              </span>

              <h3 className="mt-8 text-4xl font-black leading-tight">
                Engineering Confidence
                <br />
                Into Every Project.
              </h3>

              <p className="mt-8 leading-9 text-slate-400">
                We combine engineering expertise, modern mining
                technologies and safety-first execution to deliver
                dependable solutions for clients across Southern Africa.
              </p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-14 grid gap-6 sm:grid-cols-2"
              >
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 transition hover:border-amber-400/30"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
                        <Icon className="text-2xl text-amber-400" />
                      </div>

                      <h4 className="mt-6 text-lg font-bold">
                        {item.title}
                      </h4>

                      <p className="mt-4 leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>

            {/* Right */}

            <div className="flex flex-col justify-center gap-6">

              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 rounded-2xl bg-amber-500 py-5 font-bold text-black transition hover:scale-[1.02]"
              >
                Request Proposal
                <FaFileSignature />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 py-5 font-semibold text-white transition hover:border-amber-400/30"
              >
                Contact Our Team
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ServicesCTA;