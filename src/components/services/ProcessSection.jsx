import { motion } from "framer-motion";

import {
  FaMap,
  FaSitemap,
  FaClipboardCheck,
  FaHelmetSafety,
  FaRocket,
} from "react-icons/fa6";

/* =========================
   DATA
========================= */

const steps = [
  {
    icon: FaMap,
    title: "Project Discovery",
    description:
      "We begin by understanding client requirements, site conditions and operational goals.",
  },
  {
    icon: FaSitemap,
    title: "Planning & Design",
    description:
      "Detailed engineering and mining plans are developed for safe and efficient execution.",
  },
  {
    icon: FaClipboardCheck,
    title: "Compliance & Approval",
    description:
      "All regulatory, environmental and safety approvals are secured before execution.",
  },
  {
  icon: FaHelmetSafety,
  title: "Execution Phase",
  description:
    "On-site implementation managed by experienced engineers and safety-driven teams.",
},
  {
    icon: FaRocket,
    title: "Delivery & Optimisation",
    description:
      "Final delivery with continuous optimisation for long-term operational success.",
  },
];

/* =========================
   MOTION SYSTEM (UNIFIED)
========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
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
  hidden: { opacity: 0, x: -50 },
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
  hidden: { opacity: 0, x: 50 },
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

 function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-36 text-white">

      {/* BACKGROUND GLOW SYSTEM */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[180px]" />
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
            Our Process
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-5xl font-black lg:text-6xl"
          >
            Structured Execution
            <br />
            From Start To Finish
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl leading-9 text-slate-400"
          >
            Every project follows a disciplined engineering workflow designed to ensure safety,
            efficiency and predictable delivery outcomes.
          </motion.p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-28">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-white/10 lg:block" />

          <div className="space-y-20">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={isLeft ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`
                    relative grid items-center gap-10 lg:grid-cols-2
                    ${!isLeft ? "lg:[&>*:first-child]:order-2" : ""}
                  `}
                >

                  {/* CONTENT CARD */}
                  <div
                    className="
                      rounded-[32px]
                      border border-white/10
                      bg-white/5
                      p-10
                      backdrop-blur-xl
                      transition
                      hover:border-amber-400/20
                      hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]
                    "
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
                      <Icon className="text-2xl text-amber-400" />
                    </div>

                    <h3 className="mt-8 text-3xl font-black">
                      {step.title}
                    </h3>

                    <p className="mt-6 leading-8 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {/* CENTER MARKER */}
                  <div className="hidden lg:flex justify-center relative">
                    <div className="h-5 w-5 rounded-full bg-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.8)]" />

                    {/* pulse effect */}
                    <div className="absolute h-10 w-10 rounded-full bg-amber-400/10 animate-ping" />
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}export default ProcessSection;