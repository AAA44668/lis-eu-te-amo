import { useEffect, useState } from "react";

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
          Leticia
        </h1>
        <p className="font-script text-4xl md:text-6xl text-foreground/70 my-4">
          &
        </p>
        <h1 className="font-display text-8xl md:text-[10rem] tracking-[0.15em] text-primary uppercase leading-none">
          Izzy
        </h1>
        <div className="red-line mt-8 mb-10" />
        


        <div className="mt-16 animate-bounce">
          <span className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body">
            ↓ role para baixo ↓
          </span>
        </div>
      </div>
    </section>);

};

export default HeroSection;