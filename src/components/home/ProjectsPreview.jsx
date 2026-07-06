import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaIndustry,
} from "react-icons/fa";

const projects = [
  {
    title: "Coal Mining Expansion",
    location: "Mpumalanga",
    category: "Mining Operations",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Infrastructure Development",
    location: "Emalahleni",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mine Rehabilitation",
    location: "South Africa",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];

function ProjectsPreview() {
  return (
    <section className="bg-slate-950 py-28 text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between"
        >
          <div>

            <span className="text-amber-400 font-semibold uppercase tracking-[0.25em]">
              Our Work
            </span>

            <h2 className="mt-4 text-5xl font-black">
              Featured Projects
            </h2>

            <p className="mt-6 max-w-2xl text-slate-400">
              Discover how GEM delivers safe, innovative and
              sustainable mining projects that create long-term value
              for clients, communities and stakeholders.
            </p>

          </div>

          <Link
            to="/projects"
            className="mt-8 lg:mt-0 inline-flex items-center gap-3 rounded-xl border border-amber-400 px-6 py-3 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-slate-950"
          >
            View All Projects
            <FaArrowRight />
          </Link>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <div className="inline-flex rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
                  {project.category}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {project.title}
                </h3>

                <div className="mt-4 flex items-center gap-3 text-slate-400">

                  <FaMapMarkerAlt />

                  <span>{project.location}</span>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-slate-500">

                    <FaIndustry />

                    <span>GEM Project</span>

                  </div>

                  <button className="font-semibold text-amber-400 transition group-hover:translate-x-2">
                    Learn More →
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectsPreview;