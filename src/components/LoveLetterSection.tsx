import { useEffect, useRef, useState } from "react";

const LETTER = `No começo, não passava em minha mente o quanto eu gostaria de você, na verdade, nada disso que temos hj. Quando vc chegou e se tornou parte da família, não esperava que nós iríamos nos aproximar tanto.

Então, por culpa de algumas ações e por ser família, nos afastamos. Mas, ficou os resquícios do sentimento mais que se criou em nós. Brigamos, xingamos, voltamos, e isso só foi aumentando esses sentimentos, q antes, era resquícios de algo e se tornou amor. E esse amor ficou forte, e mais forte conforto tudo foi passando.

Se eu te dissesse que me arrependo de ter me afastado antes, estaria mentindo. Pois tudo o que aconteceu foi para que pudesse estar juntos e mais unidos, com confiança.

Então, eu amo vc por vc ser exatamente assim, nada mais, nada menos. Eu te amo, minha Princesa.`;

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
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-10">
          <div className="red-line !m-0" />
          <h2 className="font-display text-4xl md:text-5xl text-primary tracking-widest uppercase">PARA VOCÊ MINHA SAFADINHA

          </h2>
        </div>
        <div className="glass-card rounded-none border-l-2 border-l-primary p-8 md:p-12">
          <p className={`font-body text-base md:text-lg text-foreground/85 whitespace-pre-line leading-loose ${displayedText.length < LETTER.length ? "typing-cursor" : ""}`}>
            {displayedText}
          </p>
        </div>
      </div>
    </section>);

};

export default LoveLetterSection;