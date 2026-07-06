import { motion } from "framer-motion";
import {
  FaLeaf,
  FaChartLine,
  FaHandshake,
  FaArrowRight,
  FaAward,
  FaShieldAlt,
  FaHardHat,
} from "react-icons/fa";

/* =========================
   COLOR SYSTEM MAP
========================= */

const colorMap = {
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-400/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-400/20",
  },
  sky: {
    bg: "bg-sky-500/10",
    text: "text-sky-400",
    border: "border-sky-400/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-400/20",
  },
};

const shadowMap = {
  amber: "hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]",
  emerald: "hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]",
  sky: "hover:shadow-[0_0_35px_rgba(14,165,233,0.15)]",
  purple: "hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]",
};

/* =========================
   DATA
========================= */

const reasons = [
  {
    icon: FaHardHat,
    title: "Safety Leadership",
    description:
      "Every GEMR operation is built around internationally recognised safety systems, continuous training and a zero-harm culture.",
    color: "amber",
  },
  {
    icon: FaLeaf,
    title: "Sustainable Mining",
    description:
      "Environmental stewardship is integrated across exploration to rehabilitation.",
    color: "emerald",
  },
  {
    icon: FaChartLine,
    title: "Operational Excellence",
    description:
      "Data-driven engineering and continuous improvement for maximum efficiency.",
    color: "sky",
  },
  {
    icon: FaHandshake,
    title: "Trusted Partnerships",
    description:
      "Long-term relationships built on transparency and accountability.",
    color: "purple",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "98%", label: "Safety Performance" },
  { value: "24/7", label: "Operational Support" },
  { value: "100%", label: "Commitment to Excellence" },
];

const commitments = [
  "International Safety Standards",
  "ESG & Sustainable Mining",
  "Modern Engineering Systems",
  "Expert Technical Teams",
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

 function WhyPartner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black py-32 text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[170px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[190px]" />
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
          <motion.span variants={fadeUp} className="uppercase tracking-[0.35em] text-amber-400 font-semibold">
            Why Partner With GEMR
          </motion.span>

          <motion.h2 variants={fadeUp} className="mt-6 text-5xl font-black leading-tight">
            Building Confidence Through Excellence
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-3xl text-slate-400 leading-9">
            Greater eMalahleni Mineral Revolution combines engineering expertise,
            responsible mining and advanced technology to deliver reliable mining solutions.
          </motion.p>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition"
            >
              <h3 className="text-4xl font-black text-amber-400">
                {item.value}
              </h3>
              <p className="mt-4 text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* REASONS */}
        <div className="mt-32 grid gap-10 lg:grid-cols-2">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            const theme = colorMap[item.color];

            return (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className={`rounded-3xl border ${theme.border} ${shadowMap[item.color]} bg-white/5 p-10 backdrop-blur-xl transition`}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}>
                  <Icon className={`text-3xl ${theme.text}`} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-6 text-slate-400 leading-8">
                  {item.description}
                </p>

                <button className={`mt-8 flex items-center gap-2 font-semibold ${theme.text}`}>
                  Learn More <FaArrowRight />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* EXECUTIVE BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 rounded-[42px] border border-white/10 bg-slate-900 p-14 lg:p-20"
        >
          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <span className="text-amber-400 uppercase tracking-[0.3em]">
                Our Commitment
              </span>

              <h2 className="mt-8 text-4xl font-black">
                Mining Solutions Built Around Trust
              </h2>

              <p className="mt-8 text-slate-400 leading-9">
                Every project reflects our commitment to safety, engineering precision
                and sustainable development.
              </p>

              <div className="mt-10 space-y-5">
                {commitments.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <FaShieldAlt className="text-amber-400" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <FaAward className="mx-auto text-6xl text-amber-400" />

                <h3 className="mt-6 text-3xl font-black">
                  Excellence Without Compromise
                </h3>

                <p className="mt-6 text-slate-400">
                  Success is validated through measurable operational impact, not activity volume.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}export default WhyPartner;