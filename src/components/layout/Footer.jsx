import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      </div>

      {/* CTA */}

      <section className="relative border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16"
          >

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>

                <span className="font-semibold uppercase tracking-[0.3em] text-amber-400">
                  Let's Build Together
                </span>

                <h2 className="mt-5 text-4xl font-black leading-tight lg:text-5xl">
                  Building South Africa's
                  <br />
                  Mining Future.
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-slate-300">
                  Partner with GEMR to deliver responsible mining,
                  engineering excellence and sustainable development
                  across South Africa.
                </p>

              </div>

              <div className="flex flex-wrap gap-5 lg:justify-end">

                <Link
                  to="/contact"
                  className="rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-amber-400"
                >
                  Contact GEMR
                </Link>

                <Link
                  to="/projects"
                  className="flex items-center gap-3 rounded-xl border border-white/20 px-8 py-4 transition hover:bg-white hover:text-slate-950"
                >
                  Explore Projects

                  <FaArrowRight />
                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Main Footer */}

      <section className="relative">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-14 lg:grid-cols-4">

            {/* Company */}

            <div>

              <h2 className="text-4xl font-black">
                GEMR
              </h2>

              <div className="mt-3 h-1 w-20 rounded-full bg-amber-500" />

              <p className="mt-8 leading-8 text-slate-400">
                Greater Emalahleni Mineral Revolution is committed to
                responsible mining, engineering excellence,
                environmental stewardship and sustainable
                economic growth.
              </p>

            </div>

            {/* Navigation */}

            <div>

              <h3 className="text-xl font-bold">
                Navigation
              </h3>

              <div className="mt-8 flex flex-col gap-4">

                <Link to="/" className="transition hover:text-amber-400">
                  Home
                </Link>

                <Link to="/about" className="transition hover:text-amber-400">
                  About
                </Link>

                <Link to="/services" className="transition hover:text-amber-400">
                  Services
                </Link>

                <Link to="/projects" className="transition hover:text-amber-400">
                  Projects
                </Link>

                <Link to="/gallery" className="transition hover:text-amber-400">
                  Gallery
                </Link>

                <Link to="/sustainability" className="transition hover:text-amber-400">
                  Sustainability
                </Link>

                <Link to="/news" className="transition hover:text-amber-400">
                  Contact
                </Link>

              </div>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-xl font-bold">
                Services
              </h3>

              <div className="mt-8 flex flex-col gap-4 text-slate-400">

                <span>Mining Operations</span>

                <span>Engineering Solutions</span>

                <span>Infrastructure Development</span>

                <span>Mine Planning</span>

                <span>Environmental Management</span>

                <span>Mine Rehabilitation</span>

                <span>Technical Consulting</span>

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-bold">
                Contact
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex items-start gap-4">

                  <FaMapMarkerAlt className="mt-1 text-amber-400" />

                  <span className="text-slate-400">
                    Emalahleni,
                    Mpumalanga,
                    South Africa
                  </span>

                </div>

                <div className="flex items-start gap-4">

                  <FaPhoneAlt className="mt-1 text-amber-400" />

                  <span className="text-slate-400">
                    +27 XX XXX XXXX
                  </span>

                </div>

                <div className="flex items-start gap-4">

                  <FaEnvelope className="mt-1 text-amber-400" />

                  <span className="text-slate-400">
                    info@gem.co.za
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ESG COMMITMENT */}

      <section className="relative border-y border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "🌱",
                title: "Sustainability",
                text: "Responsible Mining",
                color: "bg-emerald-500/20 text-emerald-400",
              },
              {
                icon: "🛡",
                title: "Safety First",
                text: "Zero Harm Culture",
                color: "bg-amber-500/20 text-amber-400",
              },
              {
                icon: "🤝",
                title: "Communities",
                text: "Shared Prosperity",
                color: "bg-blue-500/20 text-blue-400",
              },
              {
                icon: "⚒",
                title: "Innovation",
                text: "Future Ready Mining",
                color: "bg-purple-500/20 text-purple-400",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="flex items-center gap-4"
              >

                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${item.color}`}>
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Bottom Footer */}

      <section className="relative">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div className="flex gap-4">

              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -5, scale: 1.15 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
                  >
                    <Icon />
                  </motion.a>
                )
              )}

            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">

              <Link to="/privacy" className="transition hover:text-amber-400">
                Privacy Policy
              </Link>

              <Link to="/terms" className="transition hover:text-amber-400">
                Terms & Conditions
              </Link>

              <Link to="/sustainability" className="transition hover:text-amber-400">
                Sustainability
              </Link>

              <Link to="/contact" className="transition hover:text-amber-400">
                Support
              </Link>

            </div>

          </div>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-500 lg:flex-row">

            <p>
              © {new Date().getFullYear()} GEMR — Greater Emalahleni Mineral Revolution
            </p>

            <p>
              Built with React, Vite & Tailwind CSS.
            </p>

          </div>

        </div>

      </section>

    </footer>
  );
}

export default Footer;