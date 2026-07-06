import { Outlet } from "react-router-dom";

import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer";

import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import MouseGlow from "../components/ui/MouseGlow";

import useLenis from "../hooks/useLenis";

function MainLayout() {
  useLenis();

  return (
    <>
      {/* Global UI */}
      <ScrollProgress />
      <MouseGlow />

      {/* Header */}
      <TopBar />
      <Navbar />

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Floating UI */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MainLayout;