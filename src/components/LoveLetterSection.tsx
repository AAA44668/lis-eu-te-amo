import { useEffect, useRef, useState } from "react";

const LETTER = `Quase 1 mês ao seu lado… e, sendo sincera, parece que você chegou na minha vida muito antes disso. É estranho explicar, mas ao mesmo tempo é a coisa mais bonita que eu já senti. Em tão pouco tempo, você conseguiu se tornar alguém essencial pra mim, alguém que eu penso todos os dias, que eu sinto falta mesmo quando acabei de ver, e que faz meu coração ficar em paz só por existir.

Você mudou a forma como eu vejo as coisas, trouxe leveza pros meus dias e fez com que momentos simples se tornassem especiais. O seu jeito, o seu cuidado, a forma como você fala comigo… tudo em você me encanta de um jeito que eu não sei nem colocar em palavras direito.

Eu gosto de nós. Gosto da nossa conexão, das nossas conversas, das nossas risadas e até dos nossos silêncios. Gosto da sensação de ter você comigo, de saber que posso contar com você e de sentir que, aos poucos, a gente tá construindo algo verdadeiro.

E mesmo sendo só "quase 1 mês", eu já tenho um carinho enorme por você, um sentimento que cresce a cada dia, sem pressa, mas cheio de intensidade. Eu só quero que você saiba o quanto você é importante pra mim e o quanto eu desejo que isso que a gente tem continue, cresça e se torne cada vez mais forte.

Se depender de mim, isso é só o começo de algo muito lindo. 💖`;

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
          <h2 className="font-display text-4xl md:text-5xl text-primary tracking-widest uppercase">PARA VOCÊ

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