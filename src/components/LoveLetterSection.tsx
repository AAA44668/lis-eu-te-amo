import { useEffect, useRef, useState } from "react";

const LETTER = `Meu amor,

Desde o dia que você entrou na minha vida, tudo ficou mais bonito. Seu sorriso é o meu lugar favorito, e seus olhos são o céu onde eu me perco todas as noites.

Cada momento ao seu lado é um presente que eu nunca vou deixar de valorizar. Você me faz querer ser melhor, amar mais forte e sonhar mais alto.

Obrigado por ser quem você é. Obrigado por escolher estar comigo.

Eu te amo mais do que as palavras conseguem dizer.

Com todo o meu amor,
Seu namorado 💜`;

const LoveLetterSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < LETTER.length) {
        setDisplayedText(LETTER.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl w-full">
        <h2 className="font-display text-3xl md:text-4xl text-primary mb-8 text-center">
          Carta de Amor
        </h2>
        <p className={`font-body text-lg md:text-xl text-foreground/90 whitespace-pre-line leading-relaxed ${displayedText.length < LETTER.length ? "typing-cursor" : ""}`}>
          {displayedText}
        </p>
      </div>
    </section>
  );
};

export default LoveLetterSection;
