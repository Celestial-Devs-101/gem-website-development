import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaHelmetSafety,
  FaIndustry,
  FaGears,
  FaRoad,
} from "react-icons/fa6";

import miningImage from "../../assets/images/mining-hero.jpg";

/* =========================
   DATA
========================= */

const services = [
  {
    title: "Mining Operations",
    icon: FaIndustry,
    description:
      "We provide end-to-end mining operations focused on productivity, operational excellence and responsible resource extraction. Our experienced teams manage projects safely while maximising efficiency and long-term value.",
    features: [
      "Open Cast Mining",
      "Mine Planning",
      "Production Management",
      "Operational Support",
    ],
    stat: "250+",
    label: "Projects Delivered",
  },
  {
    title: "Engineering Solutions",
    icon: FaGears,
    description:
      "Our engineering division delivers innovative mechanical, civil and mining engineering solutions supported by modern technology and highly skilled professionals dedicated to operational performance.",
    features: [
      "Mechanical Engineering",
      "Civil Infrastructure",
      "Plant Optimisation",
      "Engineering Consulting",
    ],
    stat: "100%",
    label: "Engineering Excellence",
  },
  {
    title: "Infrastructure Development",
    icon: FaRoad,
    description:
      "From roads and industrial facilities to supporting mining infrastructure, GEMR develops reliable solutions that improve operational efficiency and create sustainable long-term assets.",
    features: [
      "Road Construction",
      "Site Preparation",
      "Industrial Facilities",
      "Project Management",
    ],
    stat: "24/7",
    label: "Project Support",
  },
  {
    title: "Health, Safety & Environment",
    icon: FaHelmetSafety,
    description:
      "Safety is embedded into every operation through strict compliance, continuous improvement and a culture that prioritises people, communities and environmental responsibility.",
    features: [
      "Risk Management",
      "Environmental Compliance",
      "Safety Audits",
      "Training Programmes",
    ],
    stat: "0",
    label: "Compromise On Safety",
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

const fadeSide = (dir = 1) => ({
  hidden: { opacity: 0, x: 60 * dir },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

/* =========================
   COMPONENT
========================= */

function CoreServices() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-36 text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.4em] text-amber-400">
            Core Services
          </p>

          <h2 className="mt-6 text-5xl font-black lg:text-6xl">
            Complete Mining
            <br />
            Solutions
          </h2>

          <p className="mx-auto mt-8 max-w-3xl leading-9 text-slate-400">
            GEMR delivers integrated mining, engineering and infrastructure services that combine innovation,
            operational excellence and sustainable development.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="mt-28 space-y-36">

          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid items-center gap-20 lg:grid-cols-2 ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* IMAGE */}
                <motion.div
                  variants={fadeSide(isEven ? -1 : 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="overflow-hidden rounded-[36px]">
                    <img
                      src={miningImage}
                      alt={service.title}
                      className="h-[650px] w-full object-cover transition duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="absolute bottom-8 left-8 rounded-3xl border border-white/10 bg-slate-950/80 px-8 py-6 backdrop-blur-xl">
                    <p className="text-5xl font-black text-amber-400">
                      {service.stat}
                    </p>
                    <p className="mt-2 text-slate-300">
                      {service.label}
                    </p>
                  </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  variants={fadeSide(isEven ? 1 : -1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500/10">
                    <Icon className="text-4xl text-amber-400" />
                  </div>

                  <h3 className="mt-10 text-5xl font-black leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-8 leading-9 text-slate-400">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-12 grid gap-5 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-white/10 bg-slate-900 px-6 py-5"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-3 w-3 rounded-full bg-amber-400" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="
                      group mt-12 inline-flex items-center gap-4
                      rounded-2xl bg-amber-500 px-8 py-5
                      font-bold text-slate-900 transition
                      hover:-translate-y-1 hover:bg-amber-400
                    "
                  >
                    Learn More
                    <FaArrowRight className="transition group-hover:translate-x-2" />
                  </button>

                </motion.div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default CoreServices;