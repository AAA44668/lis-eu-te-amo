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
    const initial: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 10,
    }));
    setHearts(initial);

    let counter = 15;
    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHeart: Heart = {
          id: counter++,
          left: Math.random() * 100,
          size: Math.random() * 16 + 10,
          duration: Math.random() * 8 + 8,
          delay: 0,
        };
        return [...prev.slice(-20), newHeart];
      });
    }, 2000);

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
          💜
        </span>
      ))}
    </>
  );
};

export default FloatingHearts;
