import ServicesHero from "../components/services/ServicesHero";
import CoreServices from "../components/services/CoreServices";
import IndustriesSection from "../components/services/IndustriesSection";
import EquipmentSection from "../components/services/EquipmentSection";
import ProcessSection from "../components/services/ProcessSection";
import WhyPartner from "../components/services/WhyPartner";
import ServicesCTA from "../components/services/ServicesCTA";

function Services() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">

      <ServicesHero />

      <CoreServices />

      <IndustriesSection />

      <EquipmentSection />

      <ProcessSection />

      <WhyPartner />

      <ServicesCTA />

    </main>
  );
}

export default Services;