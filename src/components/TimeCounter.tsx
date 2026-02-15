import { useEffect, useState } from "react";

// Change this date to your anniversary date
const START_DATE = new Date("2026-01-12T00:00:00");

const TimeCounter = () => {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [visible, setVisible] = useState(false);
  const ref = (node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(node);
  };

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ms = now.getTime() - START_DATE.getTime();
      const seconds = Math.floor(ms / 1000) % 60;
      const minutes = Math.floor(ms / 60000) % 60;
      const hours = Math.floor(ms / 3600000) % 24;
      const days = Math.floor(ms / 86400000);
      setDiff({ days, hours, minutes, seconds });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Dias", value: diff.days },
    { label: "Horas", value: diff.hours },
    { label: "Minutos", value: diff.minutes },
    { label: "Segundos", value: diff.seconds },
  ];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-3xl md:text-5xl text-primary text-center mb-4">
          Nosso Tempo Juntos
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12 text-lg">
          Cada segundo ao seu lado é um tesouro
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-6 md:p-8 text-center min-w-[120px]">
              <span className="font-display text-4xl md:text-6xl text-primary block mb-2">
                {String(item.value).padStart(item.label === "Dias" ? 1 : 2, "0")}
              </span>
              <span className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeCounter;
