import { motion } from "framer-motion";
import {
  FaHelmetSafety,
  FaLeaf,
  FaMountain,
  FaPeopleGroup,
} from "react-icons/fa6";

import aboutImage from "../../assets/images/about-mine.jpg";function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

      <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative"
        >

          <div className="overflow-hidden rounded-[36px]">

            <img
              src={aboutImage}
              alt="Mining Operations"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div className="absolute -bottom-10 right-8 rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

            <p className="text-5xl font-black text-amber-400">
              20+
            </p>

            <p className="mt-2 text-slate-300">
              Years of Combined
              <br />
              Mining Experience
            </p>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex flex-col justify-center"
        >

          <p className="font-semibold uppercase tracking-[0.3em] text-amber-400">
            Who We Are
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Building A Responsible
            Mining Future.
          </h2>

          <p className="mt-8 leading-9 text-slate-300">
            Greater eMalahleni Mineral Revolution (GEMR) is dedicated
            to delivering safe, sustainable and innovative mining
            solutions that strengthen South Africa's mineral sector,
            empower local communities and create long-term economic value.
          </p>

          <div className="mt-12 grid gap-5">

            {[
              {
                icon: FaHelmetSafety,
                title: "Safety Excellence",
                text: "Zero harm culture backed by international standards.",
              },
              {
                icon: FaLeaf,
                title: "Environmental Responsibility",
                text: "Sustainable mining with rehabilitation at its core.",
              },
              {
                icon: FaMountain,
                title: "Modern Mining",
                text: "Technology-driven exploration and operations.",
              },
              {
                icon: FaPeopleGroup,
                title: "Community Impact",
                text: "Creating jobs and uplifting local communities.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">

                    <Icon className="text-3xl text-amber-400" />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default WhoWeAre;