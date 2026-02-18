import { useState } from "react";

const FinalSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = (node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(node);
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className={`text-center transition-all duration-[2s] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="red-line mb-8" />
        <p className="font-display text-5xl md:text-8xl text-primary tracking-widest uppercase leading-relaxed">
          Pra sempre
        </p>
        <p className="font-script text-3xl md:text-5xl text-foreground/50 mt-6">
          Leticia & Izzy
        </p>
        <div className="red-line mt-8" />
        <div className="mt-12 text-4xl">❤️</div>
      </div>
    </section>
  );
};

export default FinalSection;
