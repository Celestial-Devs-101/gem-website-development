import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";

import leaderImage from "../../assets/images/about-mine.jpg";

function Leadership() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

      <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[160px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="overflow-hidden rounded-[36px]">

            <img
              src={leaderImage}
              alt="Leadership"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <FaQuoteLeft className="text-6xl text-amber-400" />

          <h2 className="mt-8 text-5xl font-black">
            Leadership Message
          </h2>

          <p className="mt-10 leading-9 text-slate-300">
            At Greater eMalahleni Mineral Revolution, we believe mining
            is more than extracting resources—it is about building
            communities, advancing technology and creating a sustainable
            future for generations to come.
          </p>

          <p className="mt-8 leading-9 text-slate-300">
            Every decision we make is driven by safety, innovation,
            integrity and our responsibility to South Africa.
          </p>

          <div className="mt-12">

            <h3 className="text-2xl font-black">
              Executive Leadership
            </h3>

            <p className="mt-2 text-amber-400">
              Greater eMalahleni Mineral Revolution
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Leadership;