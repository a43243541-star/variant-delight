import heroBg from "@/assets/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-deep">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
        style={{ backgroundImage: `url(${heroBg})`, mixBlendMode: "luminosity" }}
      />
      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(135deg, rgba(10,25,48,0.9) 0%, rgba(0,71,255,0.4) 100%)" }}
      />

      {/* Swoosh SVG */}
      <svg className="absolute right-[-10%] top-[20%] w-[50%] opacity-20 pointer-events-none z-0" viewBox="0 0 600 400" fill="none">
        <path d="M0 200 C150 50, 450 350, 600 200" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M0 250 C150 100, 450 400, 600 250" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
        <path d="M0 150 C150 0, 450 300, 600 150" stroke="white" strokeWidth="1.5" fill="none" opacity="0.15" />
      </svg>

      {/* Content */}
      <div className="relative z-[2] container mx-auto text-primary-foreground max-w-[900px]">
        <p className="font-handwritten text-primary-foreground text-2xl md:text-3xl opacity-0 animate-fade-up">
          Твой старт в карьеру
        </p>
        <h1 className="text-primary-foreground text-[clamp(3rem,6vw,6rem)] font-display font-black tracking-tight leading-[1.05] my-4 opacity-0 animate-fade-up-d1">
          Будущее права<br />начинается здесь.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-[600px] opacity-0 animate-fade-up-d2">
          Молодежный штаб Ассоциации выпускников СЮИ-СГАП-СГЮА. Объединяем поколения, делимся опытом, создаем элиту юриспруденции вместе.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up-d3">
          <button
            onClick={() => scrollTo("#footer")}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-lg bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(0,71,255,0.3)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_30px_rgba(0,71,255,0.4)] transition-all cursor-pointer border-none relative overflow-hidden z-[1]"
          >
            Присоединиться к команде
          </button>
          <button
            onClick={() => scrollTo("#gallery")}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-lg bg-card text-deep shadow-card hover:-translate-y-1 hover:text-primary hover:shadow-float transition-all cursor-pointer border-none"
          >
            Ближайшие события
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
