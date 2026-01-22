import HeroSection from "@/components/HeroSection";
import ScrollMotorcycle from "@/components/ScrollMotorcycle";
import SpecsSection from "@/components/SpecsSection";
import AdventureSection from "@/components/AdventureSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="w-full relative">
      {/* Fixed scroll-animated motorcycle that overlays all sections */}
      <ScrollMotorcycle />
      
      {/* Sections */}
      <HeroSection />
      <SpecsSection />
      <AdventureSection />
      <CTASection />
    </main>
  );
};

export default Index;
