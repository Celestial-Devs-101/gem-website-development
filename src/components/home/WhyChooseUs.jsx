import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLeaf,
  FaCog,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FaShieldAlt,
    title: "Safety Excellence",
    description:
      "We operate with uncompromising safety standards, protecting our people, assets and surrounding communities through world-class operational practices.",
  },
  {
    icon: FaCog,
    title: "Engineering Innovation",
    description:
      "Our engineering expertise combines modern technology with practical mining solutions to maximize efficiency and long-term operational performance.",
  },
  {
    icon: FaLeaf,
    title: "Sustainable Mining",
    description:
      "Environmental responsibility is integrated into every project, ensuring responsible resource development for future generations.",
  },
  {
    icon: FaUsers,
    title: "Community Impact",
    description:
      "We create lasting value by investing in skills development, local partnerships and economic empowerment within our communities.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="font-semibold uppercase tracking-[0.35em] text-amber-400">
            Why Industry Leaders Choose GEM
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight lg:text-6xl">
            Building the Future of
            <span className="block text-amber-400">
              Responsible Mining
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            GEM combines engineering excellence, sustainable mining,
            innovation and operational integrity to deliver solutions that
            create lasting value for our clients, communities and the
            environment.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .7,
                  delay: index * .12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                  hover:border-amber-500/50
                "
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/15 text-2xl text-amber-400 transition group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>        {/* Trust Metrics */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 grid gap-8 rounded-[36px] border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-10 lg:grid-cols-4"
        >
          {[
            {
              value: "25+",
              label: "Major Projects Delivered",
            },
            {
              value: "500+",
              label: "Skilled Professionals",
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
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className="text-5xl font-black text-amber-400">
                {item.value}
              </h3>

              <p className="mt-4 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[40px]
            border
            border-amber-500/20
            bg-gradient-to-br
            from-amber-500/10
            via-slate-900
            to-slate-950
            p-12
            lg:p-20
          "
        >

          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="uppercase tracking-[0.35em] font-semibold text-amber-400">
                Partner With Excellence
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">
                Together We Build
                <span className="block">
                  Sustainable Success.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl leading-8 text-slate-300">
                Whether developing new mining infrastructure,
                expanding operational capacity or delivering
                sustainable engineering solutions, GEM is
                committed to creating measurable value through
                innovation, safety and operational excellence.
              </p>

            </div>

            <div className="flex flex-wrap gap-5 lg:justify-end">

              <Link
                to="/services"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-amber-500
                  px-8
                  py-4
                  font-bold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-amber-400
                "
              >
                Explore Services

                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="
                  rounded-xl
                  border
                  border-white/20
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:border-amber-500
                  hover:bg-white
                  hover:text-slate-950
                "
              >
                Contact Us
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default WhyChooseUs;