import PageTransition from "../components/ui/PageTransition";

import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsPreview from "../components/home/ProjectsPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Statistics from "../components/home/Statistics";
import SustainabilityPreview from "../components/home/SustainabilityPreview";
import LatestNews from "../components/home/LatestNews";
import CTASection from "../components/home/CTASection";

function Home() {
  return (
    <PageTransition>

      {/* ======================================================
                          HERO
      ======================================================= */}

      <Hero />

      {/* ======================================================
                     ABOUT PREVIEW
      ======================================================= */}

      <AboutPreview />

      {/* ======================================================
                     SERVICES
      ======================================================= */}

      <ServicesSection />

      {/* ======================================================
                    FEATURED PROJECTS
      ======================================================= */}

      <ProjectsPreview />

      {/* ======================================================
                    WHY CHOOSE GEM
      ======================================================= */}

      <WhyChooseUs />

      {/* ======================================================
                     COMPANY STATS
      ======================================================= */}

      <Statistics />

      {/* ======================================================
                  SUSTAINABILITY
      ======================================================= */}

      <SustainabilityPreview />

      {/* ======================================================
                     LATEST NEWS
      ======================================================= */}

      <LatestNews />

      {/* ======================================================
                    CALL TO ACTION
      ======================================================= */}

      <CTASection />

    </PageTransition>
  );
}

export default Home;