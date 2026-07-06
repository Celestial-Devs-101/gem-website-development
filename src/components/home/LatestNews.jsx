import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const news = [
  {
    title: "GEM Expands Sustainable Mining Operations",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    description:
      "GEM continues investing in environmentally responsible mining practices while improving production efficiency.",
  },
  {
    title: "Infrastructure Development Across Mpumalanga",
    date: "June 2026",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    description:
      "New engineering projects strengthen logistics and create long-term employment opportunities.",
  },
  {
    title: "Safety Excellence Reaches New Milestone",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Continuous investment in safety systems has resulted in record operational performance.",
  },
];

function LatestNews() {
  return (
    <section className="bg-slate-900 py-28 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between"
        >

          <div>

            <span className="uppercase tracking-[0.25em] text-amber-400 font-semibold">
              Newsroom
            </span>

            <h2 className="mt-4 text-5xl font-black">
              Latest News
            </h2>

            <p className="mt-6 max-w-2xl text-slate-400">
              Stay informed with our latest operational updates,
              sustainability initiatives and company announcements.
            </p>

          </div>

          <Link
            to="/news"
            className="mt-8 lg:mt-0 inline-flex items-center gap-3 rounded-xl border border-amber-400 px-6 py-3 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-slate-950"
          >
            View All News
            <FaArrowRight />
          </Link>

        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {news.map((item, index) => (

            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover duration-700 hover:scale-110"
                />

              </div>

              <div className="p-8">

                <div className="flex items-center gap-3 text-sm text-amber-400">

                  <FaCalendarAlt />

                  {item.date}

                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {item.description}
                </p>

                <Link
                  to="/news"
                  className="inline-flex items-center gap-3 mt-8 font-semibold text-amber-400"
                >
                  Read Article

                  <FaArrowRight />

                </Link>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default LatestNews;