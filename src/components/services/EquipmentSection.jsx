
import { motion } from "framer-motion";
import {
  FaTractor,
  FaWrench,
  FaGear,
  FaTruckMoving,
} from "react-icons/fa6";

/* =========================
   DATA
========================= */

const equipment = [
  {
    icon: FaTractor,
    title: "Heavy Mining Equipment",
    description:
      "High-performance excavation and earthmoving machinery designed for large-scale mining operations.",
  },
  {
    icon: FaTruckMoving,
    title: "Haulage Systems",
    description:
      "Efficient transport systems ensuring fast, safe and reliable movement of materials across sites.",
  },
  {
    icon: FaWrench,
    title: "Maintenance Systems",
    description:
      "Advanced maintenance programs ensuring maximum uptime and operational efficiency.",
  },
  {
    icon: FaGear,
    title: "Engineering Technology",
    description:
      "Modern engineering systems integrated with precision tools and automation technologies.",
  },
];

const metrics = [
  {
    label: "Machine Uptime",
    value: "98%",
  },
  {
    label: "Fuel Efficiency",
    value: "92%",
  },
  {
    label: "Safety Compliance",
    value: "100%",
  },
  {
    label: "Operational Output",
    value: "High",
  },
];

/* =========================
   MOTION
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
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
  hidden: {
    opacity: 0,
    x: 50,
  },
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

function EquipmentSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-36 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

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

          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.4em] text-amber-400"
          >
            Equipment & Technology
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-5xl font-black lg:text-6xl"
          >
            Powering Mining
            <br />
            With Precision
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl leading-9 text-slate-400"
          >
            We utilise modern mining equipment and engineering
            technologies to ensure safe, efficient and high-output
            operations across every project.
          </motion.p>

        </motion.div>

        {/* Main Grid */}

        <div className="mt-28 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <h3 className="text-3xl font-black">
              Modern Mining Fleet
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Our fleet of advanced mining machinery ensures
              operational precision, safety compliance and maximum
              productivity in demanding environments.
            </p>

            <div className="mt-12 space-y-6">

              {equipment.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="flex items-start gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-amber-400/20"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">

                      <Icon className="text-2xl text-amber-400" />

                    </div>

                    <div>

                      <h4 className="text-xl font-bold">
                        {item.title}
                      </h4>

                      <p className="mt-3 leading-7 text-slate-400">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-[40px] border border-white/10 bg-slate-950/60 p-10 backdrop-blur-xl"
          >

            <h3 className="text-3xl font-black">
              Engineering Performance Metrics
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Our engineering systems are built around measurable
              performance, operational efficiency and safety.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-14 grid gap-6"
            >

              {metrics.map((metric, index) => (

                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/20"
                >

                  <p className="text-slate-300">
                    {metric.label}
                  </p>

                  <p className="text-2xl font-black text-amber-400">
                    {metric.value}
                  </p>

                </motion.div>

              ))}

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default EquipmentSection;