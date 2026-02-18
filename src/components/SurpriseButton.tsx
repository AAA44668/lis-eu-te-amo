import { useState, useCallback } from "react";

const SurpriseButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [particles, setParticles] = useState<{id: number; x: number; y: number; tx: string; ty: string; size: number;}[]>([]);

  const handleClick = useCallback(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 30;
      const distance = Math.random() * 300 + 100;
      return {
        id: i,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        tx: `${Math.cos(angle) * distance}px`,
        ty: `${Math.sin(angle) * distance}px`,
        size: Math.random() * 20 + 14,
      };
    });
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 2000);
    setShowPopup(true);
  }, []);

  return (
    <>
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <button
          onClick={handleClick}
          className="glow-btn text-primary-foreground font-display text-2xl md:text-3xl px-12 py-5 tracking-widest uppercase cursor-pointer border-0"
        >
          Clique aqui ❤️
        </button>
      </section>

      {particles.map((p) => (
        <span
          key={p.id}
          className="heart-particle"
          style={{
            left: p.x,
            top: p.y,
            fontSize: p.size,
            "--tx": p.tx,
            "--ty": p.ty,
          } as React.CSSProperties}
        >
          ❤️
        </span>
      ))}

      {showPopup && (
        <div
          className="fixed inset-0 dark-overlay z-50 flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="glass-card p-8 md:p-12 max-w-lg text-center reveal-up border-t-2 border-t-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-5xl block mb-6">❤️</span>
            <h3 className="font-display text-5xl md:text-6xl text-primary mb-4 tracking-widest uppercase">
              Eu te amo
            </h3>
            <p className="font-script text-2xl text-foreground/60 mb-6">Leticia / Izzy</p>
            <p className="font-body text-base text-foreground/75 leading-relaxed mb-8">
              Eu amo vc por vc ser exatamente assim, nada mais, nada menos. Minha Princesa.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="glow-btn text-primary-foreground font-display text-sm px-8 py-3 tracking-widest uppercase cursor-pointer border-0"
            >
              Fechar ❤️
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SurpriseButton;
