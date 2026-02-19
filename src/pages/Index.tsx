import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetterSection from "@/components/LoveLetterSection";


import SurpriseButton from "@/components/SurpriseButton";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  return (
    <div className="animated-gradient-bg min-h-screen relative">
      <FloatingHearts />
      <div className="relative z-10">
        <HeroSection />
        <LoveLetterSection />
        
        
        <SurpriseButton />
        <FinalSection />
      </div>
    </div>
  );
};

export default Index;
