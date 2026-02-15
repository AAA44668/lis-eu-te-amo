import { useEffect, useState } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <div
        className={`transition-all duration-[1.5s] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1 className="font-script text-7xl md:text-9xl text-primary mb-6 drop-shadow-[0_0_40px_hsla(330,80%,60%,0.5)]">
          Lis 💜
        </h1>
        <p className="font-body text-xl md:text-3xl text-foreground/80 max-w-xl mx-auto leading-relaxed italic">
          Você é a melhor parte da minha vida.
        </p>
        <div className="mt-12 animate-bounce">
          <span className="text-muted-foreground text-sm tracking-widest uppercase font-body">
            ↓ role para baixo ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
