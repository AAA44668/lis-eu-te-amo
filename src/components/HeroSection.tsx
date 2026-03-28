import { useEffect, useState } from "react";
import couplePhoto from "@/assets/couple.png";
const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div
        className={`transition-all duration-[2s] ease-out ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`
        }>

        <div className="red-line mb-8" />
        <h1 className="font-display text-8xl md:text-[10rem] tracking-[0.15em] text-primary uppercase leading-none">
          Big Boss
        </h1>
        <div className="red-line mt-8 mb-10" />

        <div className="mt-8 mb-6">
          <img
            src={couplePhoto}
            alt="Nós dois"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover mx-auto border-4 border-primary/50 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
          />
        </div>
        <div className="mt-16 animate-bounce">
          <span className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body">
            ↓ role para baixo ↓
          </span>
        </div>
      </div>
    </section>);

};

export default HeroSection;