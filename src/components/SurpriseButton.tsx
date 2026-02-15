import { useState, useCallback } from "react";

const SurpriseButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; tx: string; ty: string; size: number }[]>([]);

  const handleClick = useCallback(() => {
    // Heart explosion
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
        <button onClick={handleClick} className="glow-btn text-primary-foreground font-display text-xl md:text-2xl px-10 py-5 rounded-full cursor-pointer border-0">
          Clique aqui 💌
        </button>
      </section>

      {/* Heart particles */}
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
          💜
        </span>
      ))}

      {/* Popup overlay */}
      {showPopup && (
        <div
          className="fixed inset-0 dark-overlay z-50 flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="glass-card rounded-3xl p-8 md:p-12 max-w-lg text-center reveal-up"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-6xl block mb-6">💜</span>
            <h3 className="font-script text-4xl md:text-5xl text-primary mb-6">
              Eu te amo, Lis/Grazy
            </h3>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
              Você é a pessoa mais incrível que eu já conheci. Cada dia ao seu lado é uma aventura que eu nunca quero que acabe. Você é meu mundo, minha paz, minha felicidade.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="glow-btn text-primary-foreground font-body text-base px-8 py-3 rounded-full cursor-pointer border-0"
            >
              Fechar 💜
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SurpriseButton;
