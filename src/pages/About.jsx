import PageTransition from "../components/ui/PageTransition";

import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import Timeline from "../components/about/Timeline";
import MissionVision from "../components/about/MissionVision";
import Values from "../components/about/Values";
import Leadership from "../components/about/Leadership";
import Stats from "../components/about/Stats";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <PageTransition>

      <AboutHero />

      <WhoWeAre />

      <Timeline />

      <MissionVision />

      <Values />

      <Leadership />

      <Stats />

      <AboutCTA />

    </PageTransition>
  );
}

export default About;