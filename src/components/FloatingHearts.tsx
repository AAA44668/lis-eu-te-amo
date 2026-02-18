import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initial: Heart[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 8,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 12,
    }));
    setHearts(initial);

    let counter = 12;
    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHeart: Heart = {
          id: counter++,
          left: Math.random() * 100,
          size: Math.random() * 14 + 8,
          duration: Math.random() * 10 + 10,
          delay: 0,
        };
        return [...prev.slice(-16), newHeart];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: 0,
          }}
        >
          ❤️
        </span>
      ))}
    </>
  );
};

export default FloatingHearts;
