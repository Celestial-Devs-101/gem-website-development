import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="pt-32 bg-slate-950 text-white">

      {/* HERO SECTION */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-slate-950" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black"
          >
            Contact GEM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-300 max-w-2xl text-lg"
          >
            Reach out to our team for partnerships, inquiries, and collaboration opportunities.
            We are ready to build the future of mining together.
          </motion.p>

        </div>
      </section>

      {/* CONTACT INFO CARDS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Phone */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              p-8 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl
            "
          >
            <FaPhone className="text-amber-400 text-3xl" />
            <h3 className="mt-4 text-xl font-bold">Phone</h3>
            <p className="mt-2 text-slate-400">+27 00 000 0000</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              p-8 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl
            "
          >
            <FaEnvelope className="text-amber-400 text-3xl" />
            <h3 className="mt-4 text-xl font-bold">Email</h3>
            <p className="mt-2 text-slate-400">info@gem.co.za</p>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              p-8 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl
            "
          >
            <FaMapMarkerAlt className="text-amber-400 text-3xl" />
            <h3 className="mt-4 text-xl font-bold">Location</h3>
            <p className="mt-2 text-slate-400">
              Emalahleni, South Africa
            </p>
          </motion.div>

        </div>
      </section>      {/* CONTACT FORM */}

      <section className="py-24 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold">Send a Message</h2>

          <form className="mt-10 grid gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-white"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-white"
            />

            <button
              type="submit"
              className="
                bg-amber-500
                text-black
                font-bold
                py-4
                rounded-xl
                hover:bg-amber-400
                transition
              "
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">
          Let’s Build the Future Together
        </h2>

        <p className="mt-6 text-slate-400">
          GEM is open to partnerships, innovation, and sustainable development projects.
        </p>
      </section>

    </div>
  );
}

export default Contact;