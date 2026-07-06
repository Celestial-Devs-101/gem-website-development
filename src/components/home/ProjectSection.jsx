import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLocationDot,
  FaHelmetSafety,
  FaLeaf,
  FaIndustry
} from "react-icons/fa6";

import projectImage from "../../assets/images/project-1.jpg";

const projects = [
  {
    title: "Coal Mining Development",
    location: "Emalahleni, Mpumalanga",
    status: "Active Project",
    completion: 82,
    description:
      "Large-scale mining operations focused on responsible extraction, environmental stewardship and sustainable production.",
  },
  {
    title: "Mineral Processing Plant",
    location: "Middelburg",
    status: "Planning",
    completion: 35,
    description:
      "Modern processing infrastructure designed to improve productivity while reducing environmental impact.",
  },
  {
    title: "Land Rehabilitation",
    location: "Mpumalanga",
    status: "Completed",
    completion: 100,
    description:
      "Environmental restoration program returning mined land to productive ecosystems.",
  },
];

function ProjectsSection() {

    return (

<section className="relative overflow-hidden bg-white py-36">

<div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-100 blur-[180px]" />

<div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-slate-200 blur-[150px]" />

<div className="mx-auto max-w-7xl px-6 lg:px-8">

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.8}}

className="text-center"

>

<p className="uppercase tracking-[8px] text-amber-500 font-semibold">

Featured Projects

</p>

<h2

className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-slate-900"

>

Projects That Shape

<br />

South Africa.

</h2>

<p

className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600"

>

Every project represents our commitment to engineering

excellence, environmental responsibility and operational

innovation.

</p>

</motion.div>

<div className="mt-24 space-y-24">

{projects.map((project,index)=>(

<motion.div

key={project.title}

initial={{

opacity:0,

y:80

}}

whileInView={{

opacity:1,

y:0

}}

viewport={{

once:true

}}

transition={{

delay:index*.15,

duration:.8

}}

className={`
grid
items-center
gap-16
lg:grid-cols-2

${index%2===1 ? "lg:[&>*:first-child]:order-2" : ""}
`}

>

{/* IMAGE */}

<div className="group relative overflow-hidden rounded-[35px] shadow-2xl">

<img

src={projectImage}

alt={project.title}

className="
h-[550px]
w-full
object-cover
transition-all
duration-700
group-hover:scale-110
"

/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"/>

<div
className="
absolute
left-8
top-8
rounded-full
bg-amber-500
px-5
py-3
font-semibold
text-slate-900
"
>

{project.status}

</div>

<div className="absolute bottom-8 left-8">

<h3 className="text-4xl font-black text-white">

{project.title}

</h3>

<div className="mt-4 flex items-center gap-3 text-white">

<FaLocationDot className="text-amber-400"/>

<span>{project.location}</span>

</div>

</div>

</div>

{/* CONTENT */}

<div>

<p className="uppercase tracking-[6px] font-semibold text-amber-500">

Project Overview

</p>

<h3

className="
mt-6
text-5xl
font-black
leading-tight
text-slate-900
"

>

{project.title}

</h3>

<p

className="
mt-8
leading-9
text-slate-600
"

>

{project.description}

</p>

<div className="mt-10 space-y-6">

<div className="flex items-center gap-4">

<div className="rounded-xl bg-amber-100 p-4">

<FaHelmetSafety className="text-2xl text-amber-500"/>

</div>

<div>

<h4 className="font-bold text-slate-900">

Zero Harm Strategy

</h4>

<p className="text-slate-600">

International mining safety protocols.

</p>

</div>

</div>

<div className="flex items-center gap-4">

<div className="rounded-xl bg-green-100 p-4">

<FaLeaf className="text-2xl text-green-600"/>

</div>

<div>

<h4 className="font-bold text-slate-900">

Environmental Compliance

</h4>

<p className="text-slate-600">

Responsible land management.

</p>

</div>

</div>              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-sky-100 p-4">

                  <FaIndustry className="text-2xl text-sky-600" />

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    Advanced Engineering
                  </h4>

                  <p className="text-slate-600">
                    Modern equipment and precision-driven execution.
                  </p>

                </div>

              </div>

            </div>

            {/* Progress */}

            <div className="mt-12">

              <div className="mb-3 flex items-center justify-between">

                <span className="font-semibold text-slate-700">
                  Project Completion
                </span>

                <span className="font-black text-amber-500">
                  {project.completion}%
                </span>

              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-200">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${project.completion}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.4,
                    delay: .2,
                  }}
                  className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-amber-400
                  to-amber-600
                  "
                />

              </div>

            </div>

            {/* Project KPIs */}

            <div className="mt-12 grid grid-cols-3 gap-5">

              {[
                {
                  value: "24/7",
                  label: "Operations",
                },
                {
                  value: "ISO",
                  label: "Certified",
                },
                {
                  value: "Zero",
                  label: "Incidents",
                },
              ].map((item) => (

                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  text-center
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-amber-400
                  hover:shadow-2xl
                  "
                >

                  <h4 className="text-3xl font-black text-amber-500">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm text-slate-600">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>

            {/* CTA */}

            <button
              className="
              group
              mt-12
              inline-flex
              items-center
              gap-4
              rounded-xl
              bg-slate-900
              px-8
              py-5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-amber-500
              hover:text-slate-900
              hover:shadow-2xl
              "
            >

              View Project

              <FaArrowRight
                className="
                transition-transform
                duration-300
                group-hover:translate-x-2
                "
              />

            </button>

          </div>

        </motion.div>

      ))}

      </div>

      {/* ===================== */}
      {/* Company Banner */}
      {/* ===================== */}

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
        overflow-hidden
        rounded-[40px]
        bg-slate-900
        p-14
        text-white
        shadow-2xl
        "
      >

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[8px] text-amber-400">
              Why GEM
            </p>

            <h2
              className="
              mt-6
              text-5xl
              font-black
              leading-tight
              "
            >
              Engineering
              Excellence
              For Every
              Project.
            </h2>

            <p
              className="
              mt-8
              max-w-2xl
              leading-9
              text-slate-300
              "
            >
              Every operation is managed through world-class
              engineering principles, rigorous safety standards,
              sustainable environmental practices and continuous
              innovation to ensure long-term value.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            {[
              ["100%", "Client Satisfaction"],
              ["24/7", "Operational Support"],
              ["50+", "Projects Delivered"],
              ["20+", "Years Experience"],
            ].map(([value, label]) => (

              <motion.div
                key={label}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                backdrop-blur-xl
                "
              >

                <h3 className="text-5xl font-black text-amber-400">
                  {value}
                </h3>

                <p className="mt-4 text-slate-300">
                  {label}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </div>

  </section>
);

}

export default ProjectsSection;