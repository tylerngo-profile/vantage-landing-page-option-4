import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import FeaturesGrid from "@/components/FeaturesGrid";
import ProcessSection from "@/components/ProcessSection";
import ContentFormats from "@/components/ContentFormats";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import CredibilitySection from "@/components/CredibilitySection";
import TimelineSection from "@/components/TimelineSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <FeaturesGrid />
      <ProcessSection />
      <ContentFormats />
      <DesignPhilosophy />
      <CredibilitySection />
      <TimelineSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
