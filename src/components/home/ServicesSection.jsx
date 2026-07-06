import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHelmetSafety,
  FaMountain,
  FaTruckMonster,
  FaIndustry,
  FaSeedling,
  FaChartLine
} from "react-icons/fa6";

import excavator from "../../assets/images/excavator.jpg";

const services = [
  {
    title: "Mining Operations",
    icon: <FaMountain />,
    description:
      "Open-pit and underground mining operations managed with world-class safety and operational standards.",
  },
  {
    title: "Engineering Services",
    icon: <FaIndustry />,
    description:
      "Mine planning, engineering consulting, infrastructure development and operational optimisation.",
  },
  {
    title: "Heavy Equipment",
    icon: <FaTruckMonster />,
    description:
      "Modern mining fleets, excavation equipment and logistics support for large-scale operations.",
  },
  {
    title: "Health & Safety",
    icon: <FaHelmetSafety />,
    description:
      "International best practices ensuring every employee returns home safely every day.",
  },
  {
    title: "Environmental Management",
    icon: <FaSeedling />,
    description:
      "Responsible environmental management, rehabilitation and sustainable mining initiatives.",
  },
  {
    title: "Project Management",
    icon: <FaChartLine />,
    description:
      "End-to-end project delivery with efficient planning, budgeting and execution excellence.",
  },
];

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-36">

      {/* Background */}

      <div className="absolute inset-0 opacity-10">

        <img
          src={excavator}
          alt=""
          className="h-full w-full object-cover"
        />

      </div>

      <div className="absolute inset-0 bg-slate-950/90" />

      {/* Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/20 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{
            opacity:0,
            y:50
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:.8
          }}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-amber-400 font-semibold">
            Our Services
          </p>

          <h2
            className="
            mt-6
            text-5xl
            font-black
            leading-tight
            text-white
            lg:text-6xl
            "
          >
            Complete Mining
            <br />
            Solutions.
          </h2>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-slate-300
            "
          >
            From exploration to rehabilitation, GEM delivers
            integrated mining solutions supported by advanced
            engineering, modern equipment and sustainable
            operational practices.
          </p>

        </motion.div>

        {/* Service Grid */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{
                opacity:0,
                y:70
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true
              }}
              transition={{
                delay:index * .12,
                duration:.7
              }}
              whileHover={{
                y:-15
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-amber-400
              hover:shadow-[0_20px_60px_rgba(245,158,11,.25)]
              "
            >

              {/* Glow */}

              <div
                className="
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-amber-400/0
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-amber-400/20
                "
              />

              <div
                className="
                relative
                z-10
                "
              >

                <div
                  className="
                  inline-flex
                  rounded-2xl
                  bg-amber-500
                  p-5
                  text-4xl
                  text-slate-900
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                  "
                >
                  {service.icon}
                </div>

                <h3
                  className="
                  mt-8
                  text-3xl
                  font-black
                  text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                  mt-5
                  leading-8
                  text-slate-300
                  "
                >
                  {service.description}
                </p>                {/* Animated Divider */}

                <div
                  className="
                  mt-8
                  h-[3px]
                  w-16
                  rounded-full
                  bg-amber-500
                  transition-all
                  duration-500
                  group-hover:w-full
                  "
                />

                {/* Learn More */}

                <button
                  className="
                  mt-8

                  inline-flex

                  items-center

                  gap-3

                  font-semibold

                  text-amber-400

                  transition-all

                  duration-300

                  group-hover:gap-5
                  "
                >
                  Learn More

                  <FaArrowRight
                    className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                    "
                  />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* ========================= */}
        {/* Company Statistics */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="
          mt-32
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-r
          from-slate-900
          via-slate-800
          to-slate-900
          p-12
          "
        >

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "20+",
                title: "Years Experience",
              },
              {
                number: "150+",
                title: "Employees",
              },
              {
                number: "50+",
                title: "Completed Projects",
              },
              {
                number: "100%",
                title: "Safety Commitment",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="text-center"
              >

                <h2
                  className="
                  text-6xl
                  font-black
                  text-amber-400
                  "
                >
                  {item.number}
                </h2>

                <p
                  className="
                  mt-4
                  text-lg
                  text-slate-300
                  "
                >
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* ========================= */}
        {/* Bottom CTA */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .2,
            duration: .8,
          }}
          className="
          mt-28
          text-center
          "
        >

          <h2
            className="
            text-5xl
            font-black
            leading-tight
            text-white
            "
          >
            Let's Build The Future
            <br />

            <span className="text-amber-400">
              Together.
            </span>

          </h2>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-slate-300
            "
          >
            Whether it's mining operations, engineering,
            exploration or project management,
            GEM has the expertise to deliver
            sustainable results with uncompromising
            safety and operational excellence.
          </p>

          <div
            className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-6
            "
          >

            <button
              className="
              rounded-xl

              bg-amber-500

              px-10

              py-5

              font-bold

              text-slate-900

              transition-all

              duration-300

              hover:-translate-y-1

              hover:scale-105

              hover:bg-amber-400

              hover:shadow-[0_15px_45px_rgba(245,158,11,.45)]

              active:scale-95
              "
            >
              Request Consultation
            </button>

            <button
              className="
              rounded-xl

              border

              border-white/20

              bg-white/5

              px-10

              py-5

              font-semibold

              text-white

              backdrop-blur-xl

              transition-all

              duration-300

              hover:border-amber-400

              hover:bg-white/10

              hover:-translate-y-1
              "
            >
              View All Services
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ServicesSection;