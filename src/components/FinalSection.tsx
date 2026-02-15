import { useEffect, useState } from "react";

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
        <p className="font-script text-4xl md:text-7xl text-primary leading-relaxed drop-shadow-[0_0_40px_hsla(330,80%,60%,0.4)]">
          Você é minha.
          <br />
          E eu sou seu.
          <br />
          <span className="text-5xl md:text-8xl">Pra sempre.</span>
        </p>
        <div className="mt-12 text-4xl">💜</div>
      </div>
    </section>
  );
};

export default FinalSection;
