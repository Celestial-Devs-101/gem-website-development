import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaShieldAlt,
  FaLeaf,
  FaMountain,
  FaUsers,
  FaAward,
} from "react-icons/fa";

import aboutImage from "../../assets/images/about-mine.jpg";

const features = [
  {
    icon: FaShieldAlt,
    title: "Safety Leadership",
    description:
      "Every operation is driven by internationally aligned safety systems, continuous training and a zero-harm culture.",
  },
  {
    icon: FaLeaf,
    title: "Environmental Stewardship",
    description:
      "Responsible resource extraction, rehabilitation planning and sustainable environmental management are central to every project.",
  },
  {
    icon: FaMountain,
    title: "Mining Excellence",
    description:
      "Combining engineering expertise with modern mining technologies to deliver efficient and reliable operations.",
  },
  {
    icon: FaUsers,
    title: "Community Development",
    description:
      "Creating shared value through local employment, skills development and meaningful community partnerships.",
  },
];

function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-44 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="font-semibold uppercase tracking-[0.35em] text-amber-400">
            ABOUT GEM
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight lg:text-6xl">

            Engineering Progress Through

            <span className="block text-amber-400">
              Responsible Mining
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">

            Greater Emalahleni Municipality Mining combines
            engineering excellence, responsible resource
            development and sustainable innovation to deliver
            mining solutions that strengthen industries,
            empower communities and protect the environment.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
            }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[36px] border border-white/10">

              <img
                src={aboutImage}
                alt="GEM Mining"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-110
                "
              />

            </div>

            {/* Floating Card */}

            <motion.div

              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              className="
                absolute
                -bottom-10
                -right-6
                rounded-3xl
                border
                border-white/10
                bg-white/10
                p-8
                backdrop-blur-xl
              "
            >

              <h3 className="text-6xl font-black text-amber-400">
                20+
              </h3>

              <p className="mt-3 leading-7 text-slate-200">
                Years of Combined
                <br />
                Mining Experience
              </p>

            </motion.div>

          </motion.div>

          {/* Content */}

          <motion.div

            initial={{
              opacity: 0,
              x: 80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: .8,
            }}

          >

            <span className="font-semibold uppercase tracking-[0.3em] text-amber-400">

              WHO WE ARE

            </span>

            <h3 className="mt-6 text-4xl font-black leading-tight">

              Building Long-Term Value Through
              Innovation, Integrity &
              Operational Excellence.

            </h3>

            <p className="mt-8 leading-9 text-slate-300">

              GEM delivers integrated mining,
              engineering and infrastructure
              solutions using modern technology,
              experienced professionals and
              sustainable operational practices.
              Our commitment extends beyond
              production—creating lasting value
              for our clients, employees and
              surrounding communities.

            </p>

            {/* Feature Cards */}

            <div className="mt-12 grid gap-6">

              {features.map((feature, index) => {

                const Icon = feature.icon;

                return (

                  <motion.div

                    key={feature.title}

                    whileHover={{
                      x: 8,
                    }}

                    initial={{
                      opacity: 0,
                      x: 30,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      delay: index * .1,
                    }}

                    viewport={{
                      once: true,
                    }}

                    className="
                      flex
                      items-start
                      gap-5
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      p-6
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-amber-500/40
                    "
                  >

                    <div className="rounded-2xl bg-amber-500/15 p-4">

                      <Icon className="text-3xl text-amber-400" />

                    </div>

                    <div>

                      <h4 className="text-xl font-bold">
                        {feature.title}
                      </h4>

                      <p className="mt-3 leading-7 text-slate-300">
                        {feature.description}
                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .7,
                delay: .25,
              }}
              className="mt-12"
            >

              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-xl
                  bg-amber-500
                  px-8
                  py-5
                  font-semibold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_20px_60px_rgba(245,158,11,.35)]
                "
              >

                Discover Our Story

                <FaArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />

              </Link>

            </motion.div>

          </motion.div>

        </div>

        {/* ===========================
              Mission | Vision | Values
        ============================ */}

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
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {[
            {
              icon: FaAward,
              title: "Our Mission",
              text:
                "To deliver innovative, safe and sustainable mining solutions that create measurable value for clients, communities and future generations.",
            },
            {
              icon: FaMountain,
              title: "Our Vision",
              text:
                "To become Southern Africa's most trusted mining and engineering partner through operational excellence and responsible leadership.",
            },
            {
              icon: FaLeaf,
              title: "Our Values",
              text:
                "Integrity, accountability, innovation, environmental stewardship and safety remain the foundation of every decision we make.",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                  p-10
                  backdrop-blur-xl
                "
              >

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-amber-500/15
                  "
                >

                  <Icon className="text-3xl text-amber-400" />

                </div>

                <h3 className="mt-8 text-3xl font-black">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-300">
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </motion.div>

        {/* ===========================
                Achievement Strip
        ============================ */}

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
            mt-28
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

          <div className="grid gap-10 text-center md:grid-cols-4">

            {[
              {
                value: "25+",
                label: "Mining Projects",
              },
              {
                value: "500+",
                label: "Employees",
              },
              {
                value: "99%",
                label: "Safety Compliance",
              },
              {
                value: "18+",
                label: "Environmental Initiatives",
              },
            ].map((item) => (

              <div key={item.label}>

                <h2 className="text-5xl font-black text-amber-400">
                  {item.value}
                </h2>

                <p className="mt-4 text-slate-300">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

        {/* ===========================
                Bottom CTA
        ============================ */}

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
            duration: .8,
          }}
          className="
            mt-28
            text-center
          "
        >

          <span className="uppercase tracking-[0.35em] font-semibold text-amber-400">
            Building The Future Together
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-tight">

            Trusted Expertise.
            <span className="block text-amber-400">
              Sustainable Growth.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl leading-9 text-slate-300">

            Every project represents our commitment to responsible
            mining, engineering innovation and creating long-term
            value through partnerships built on trust, safety and
            operational excellence.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              to="/services"
              className="
                rounded-xl
                bg-amber-500
                px-8
                py-5
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
              "
            >
              Explore Our Services
            </Link>

            <Link
              to="/contact"
              className="
                rounded-xl
                border
                border-white/15
                px-8
                py-5
                font-semibold
                transition-all
                duration-300
                hover:border-amber-500
                hover:bg-white
                hover:text-slate-950
              "
            >
              Contact Our Team
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutPreview;