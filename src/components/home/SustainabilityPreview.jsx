import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SustainabilityPreview() {
  return (
    <section className="bg-slate-950 py-28 text-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.25em] text-emerald-400 font-semibold">
            Sustainability
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Responsible Mining.
            <br />
            Lasting Impact.
          </h2>

          <p className="mt-8 text-slate-400 leading-8">
            Sustainability is embedded in every project we undertake.
            We strive to balance operational excellence with environmental
            responsibility and community development.
          </p>

          <Link
            to="/sustainability"
            className="inline-flex mt-10 rounded-xl bg-emerald-500 px-8 py-4 font-bold text-slate-950 hover:bg-emerald-400 transition"
          >
            Learn More
          </Link>

        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
          alt="Sustainability"
          className="rounded-3xl object-cover h-[500px] w-full"
        />

      </div>

    </section>
  );
}

export default SustainabilityPreview;