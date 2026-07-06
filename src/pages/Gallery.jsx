import { motion } from "framer-motion";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    "https://images.unsplash.com/photo-1581091870622-3f6c0b0c3a14",
    "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf",
    "https://images.unsplash.com/photo-1620651686654-5e0c3a1a7c7f",
  ];

  return (
    <div className="pt-32 bg-slate-950 text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black"
        >
          Project Gallery
        </motion.h1>

        <p className="mt-6 text-slate-400 max-w-2xl">
          A visual showcase of GEM mining operations, infrastructure developments,
          and engineering excellence.
        </p>

      </section>

      {/* GRID */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                relative overflow-hidden
                rounded-2xl
                border border-white/10
                group
              "
            >

              <img
                src={img}
                alt="gallery"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold">Mining Operation</h3>
                <p className="text-sm text-slate-300">GEM Infrastructure</p>
              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Gallery;