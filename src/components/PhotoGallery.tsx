import { useEffect, useState } from "react";

const PLACEHOLDERS = [
  { id: 1, gradient: "from-pink-900/40 to-purple-900/40", label: "Nosso primeiro encontro" },
  { id: 2, gradient: "from-purple-900/40 to-rose-900/40", label: "Viagem especial" },
  { id: 3, gradient: "from-rose-900/40 to-fuchsia-900/40", label: "Momento favorito" },
  { id: 4, gradient: "from-fuchsia-900/40 to-purple-900/40", label: "Nós dois" },
  { id: 5, gradient: "from-purple-900/40 to-pink-900/40", label: "Pôr do sol juntos" },
  { id: 6, gradient: "from-pink-900/40 to-violet-900/40", label: "Sempre juntos" },
];

const PhotoGallery = () => {
  const [visible, setVisible] = useState(false);
  const ref = (node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(node);
  };

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-3xl md:text-5xl text-primary text-center mb-12">
          Nossos Momentos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
          {PLACEHOLDERS.map((photo, i) => (
            <div
              key={photo.id}
              className="photo-card rounded-2xl overflow-hidden aspect-square glass-card flex items-center justify-center cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${photo.gradient} flex items-center justify-center p-4`}>
                <div className="text-center">
                  <span className="text-4xl mb-3 block">📸</span>
                  <span className="font-body text-sm text-foreground/60">{photo.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="font-body text-muted-foreground text-center mt-8 text-sm italic">
          Adicione suas fotos favoritas aqui 💜
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
