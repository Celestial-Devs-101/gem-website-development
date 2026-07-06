import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaArrowRight,
  FaShieldAlt,
  FaLeaf,
  FaIndustry,
} from "react-icons/fa";

import heroImage from "../../assets/images/mine-hero.jpg";

function Hero() {
  const stats = [
    {
      value: 20,
      suffix: "+",
      label: "Years Experience",
    },
    {
      value: 150,
      suffix: "+",
      label: "Employees",
    },
    {
      value: 50,
      suffix: "+",
      label: "Projects",
    },
    {
      value: 100,
      suffix: "%",
      label: "Safety",
    },
  ];

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-slate-950">

      {/* Background */}

      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Mining Operations"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent" />

      {/* Decorative Glows */}

      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[150px]" />

      {/* Content */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="font-semibold uppercase tracking-[8px] text-amber-400"
            >
              Greater Emalahleni Municipality
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: .2,
                duration: .8,
              }}
              className="mt-8 text-6xl font-black leading-none tracking-tight text-white lg:text-8xl"
            >
              Building
              <br />

              South Africa's

              <br />

              <span className="text-amber-400">
                Mining Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: .4,
                duration: .8,
              }}
              className="mt-8 max-w-xl text-lg leading-9 text-slate-300"
            >
              GEM delivers responsible mining,
              engineering and mineral development
              solutions through innovation,
              sustainability and operational excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: .6,
                duration: .8,
              }}
              className="mt-12 flex flex-wrap gap-6"
            >

              <button
                className="
                group
                rounded-xl
                bg-amber-500
                px-8
                py-4
                font-semibold
                text-slate-900
                transition-all
                duration-300
                hover:scale-105
                hover:bg-amber-400
                "
              >

                <span className="flex items-center gap-3">

                  Explore Projects

                  <FaArrowRight className="transition-transform group-hover:translate-x-2" />

                </span>

              </button>

              <button
                className="
                rounded-xl
                border
                border-white/40
                bg-white/10
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white
                hover:text-slate-900
                "
              >
                Contact Us
              </button>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
              className="mt-14 flex flex-wrap gap-8 text-white"
            >

              <div className="flex items-center gap-3">

                <FaShieldAlt className="text-amber-400" />

                <span>Safety First</span>

              </div>

              <div className="flex items-center gap-3">

                <FaLeaf className="text-amber-400" />

                <span>Sustainable Mining</span>

              </div>

              <div className="flex items-center gap-3">

                <FaIndustry className="text-amber-400" />

                <span>Modern Operations</span>

              </div>

            </motion.div>

          </div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: .8,
              duration: .8,
            }}
            className="hidden lg:block"
          >

            <div className="grid grid-cols-2 gap-6">              {stats.map((stat) => (

                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -10,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className="
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/10
                  p-8
                  backdrop-blur-xl
                  shadow-2xl
                  "
                >

                  <h2 className="text-5xl font-black text-amber-400">

                   {stat.value}

                    {stat.suffix}

                  </h2>

                  <p className="mt-4 text-slate-200">
                    {stat.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

      {/* Mobile Statistics */}

      <div className="relative z-20 -mt-10 px-6 lg:hidden">

        <div className="grid grid-cols-2 gap-4">

          {stats.map((stat) => (

            <motion.div
              key={stat.label}
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
              className="
              rounded-2xl
              border
              border-white/20
              bg-white/10
              p-6
              backdrop-blur-xl
              "
            >

              <h2 className="text-4xl font-black text-amber-400">

               {stat.value}

                {stat.suffix}

              </h2>

              <p className="mt-2 text-sm text-slate-200">

                {stat.label}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
        }}
        className="
        absolute
        bottom-10
        left-1/2
        z-30
        -translate-x-1/2
        "
      >

        <div className="flex flex-col items-center">

          <span
            className="
            mb-4
            text-xs
            uppercase
            tracking-[6px]
            text-slate-300
            "
          >
            Scroll
          </span>

          <div
            className="
            flex
            h-14
            w-8
            justify-center
            rounded-full
            border
            border-white/40
            p-2
            "
          >

            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="
              h-2
              w-2
              rounded-full
              bg-amber-400
              "
            />

          </div>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
            }}
            className="mt-4"
          >

            <FaArrowRight className="rotate-90 text-lg text-amber-400" />

          </motion.div>

        </div>

      </motion.div>

      {/* Decorative Grid */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating Accent Circles */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-40
        right-20
        hidden
        h-6
        w-6
        rounded-full
        bg-amber-400
        shadow-xl
        lg:block
        "
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-40
        left-20
        hidden
        h-4
        w-4
        rounded-full
        bg-sky-400
        shadow-lg
        lg:block
        "
      />

    </section>
  );
}

export default Hero;