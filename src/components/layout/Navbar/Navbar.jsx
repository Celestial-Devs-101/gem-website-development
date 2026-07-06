import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaXmark,
  FaChevronDown,
} from "react-icons/fa6";

import logo from "/src/assets/branding/logo-full.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (

    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-white/10
      bg-slate-950/90
      backdrop-blur-xl
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-5"
          >

            <img
              src={logo}
              alt="Greater eMalahleni Mineral Revolution"
              className="
              h-16
              w-auto
              transition-transform
              duration-500
              hover:scale-105
              "
            />

            <div className="hidden xl:block">

              <h1
                className="
                text-xl
                font-black
                tracking-wide
                text-white
                "
              >
                Greater eMalahleni
              </h1>

              <p
                className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-amber-400
                "
              >
                Mineral Revolution
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (

              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `
                  relative
                  font-medium
                  transition
                  duration-300
                  ${
                    isActive
                      ? "text-amber-400"
                      : "text-slate-300 hover:text-white"
                  }
                  `
                }
              >
                {link.name}
              </NavLink>

            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/contact"
              className="
              rounded-xl
              bg-amber-500
              px-6
              py-3
              font-semibold
              text-slate-950
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "
            >
              Get In Touch
            </Link>

          </div>          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-white
              transition
              hover:border-amber-500
              lg:hidden
            "
          >
            {mobileOpen ? (
              <FaXmark className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>

        </div>

      </div>

      {/* ==========================
              Mobile Menu
      ========================== */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: .35,
            }}
            className="
              border-t
              border-white/10
              bg-slate-950
              lg:hidden
            "
          >

            <div className="px-6 py-8">

              {/* Mobile Logo */}

              <div
                className="
                  mb-10
                  flex
                  items-center
                  gap-4
                "
              >

                <img
                  src={logo}
                  alt="Greater eMalahleni Mineral Revolution"
                  className="h-14 w-auto"
                />

                <div>

                  <h2
                    className="
                      text-lg
                      font-black
                      text-white
                    "
                  >
                    Greater eMalahleni
                  </h2>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-amber-400
                    "
                  >
                    Mineral Revolution
                  </p>

                </div>

              </div>

              {/* Navigation */}

              <div className="flex flex-col">

                {navLinks.map((link) => (

                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/5
                      py-5
                      text-lg
                      transition
                      duration-300
                      ${
                        isActive
                          ? "text-amber-400"
                          : "text-slate-300 hover:text-white"
                      }
                      `
                    }
                  >

                    {link.name}

                    <FaChevronDown
                      className="
                        -rotate-90
                        text-sm
                        opacity-60
                      "
                    />

                  </NavLink>

                ))}

              </div>

              {/* CTA */}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-10
                  flex
                  justify-center
                  rounded-xl
                  bg-amber-500
                  py-4
                  font-semibold
                  text-slate-950
                  transition
                  duration-300
                  hover:bg-white
                "
              >
                Contact GEMR
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>

  );

}

export default Navbar;