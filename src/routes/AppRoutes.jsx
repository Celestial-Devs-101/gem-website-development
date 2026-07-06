import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Sustainability from "../pages/Sustainability";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";

/* Optional future page */
function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ALL PAGES INSIDE MAIN LAYOUT */}
        <Route element={<MainLayout />}>

          {/* INDEX ROUTE */}
          <Route index element={<Home />} />

          {/* CORE ROUTES */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* 404 INSIDE LAYOUT */}
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;