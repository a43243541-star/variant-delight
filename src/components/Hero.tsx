import { useEffect, useState, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const parallaxOffset = scrollY * 0.3;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-deep"
    >
      {/* Background image with Ken Burns + parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${loaded ? 1.1 : 1.2})`,
          transition: loaded ? "transform 12s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-center opacity-40"
          style={{ mixBlendMode: "luminosity" }}
        />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,25,48,0.9) 0%, rgba(0,71,255,0.4) 100%)",
        }}
      />

      {/* Animated floating shapes */}
      <div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(222 100% 50% / 0.15), transparent 70%)",
          top: "10%",
          right: "-5%",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(350 100% 59% / 0.1), transparent 70%)",
          bottom: "5%",
          left: "-5%",
          animation: "float 10s ease-in-out 2s infinite",
        }}
      />

      {/* Animated Swoosh SVG */}
      <svg
        className="absolute right-[-10%] top-[20%] w-[50%] opacity-20 pointer-events-none z-[1]"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path
          d="M0 200 C150 50, 450 350, 600 200"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          className="animate-[dash_3s_ease-in-out_forwards]"
          strokeDasharray="900"
          strokeDashoffset={loaded ? "0" : "900"}
          style={{ transition: "stroke-dashoffset 2s ease-out 0.5s" }}
        />
        <path
          d="M0 250 C150 100, 450 400, 600 250"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          strokeDasharray="900"
          strokeDashoffset={loaded ? "0" : "900"}
          style={{ transition: "stroke-dashoffset 2.5s ease-out 0.8s" }}
        />
        <path
          d="M0 150 C150 0, 450 300, 600 150"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.15"
          strokeDasharray="900"
          strokeDashoffset={loaded ? "0" : "900"}
          style={{ transition: "stroke-dashoffset 2s ease-out 1.1s" }}
        />
      </svg>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-[2] container mx-auto text-primary-foreground max-w-[900px] scroll-reveal ${isVisible ? "visible" : ""}`}
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      >
        <p className="text-destructive text-sm md:text-base font-semibold uppercase tracking-[0.2em] opacity-0 animate-fade-up">
          Твой старт в карьеру
        </p>
        <h1 className="text-primary-foreground text-[clamp(2.2rem,6vw,6rem)] font-display font-black tracking-tight leading-[1.05] my-4 opacity-0 animate-fade-up-d1">
          Будущее права
          <br />
          начинается здесь
        </h1>
        <p className="text-base md:text-xl text-primary-foreground/80 mb-10 max-w-[600px] opacity-0 animate-fade-up-d2">
          Молодежный штаб Ассоциации выпускников СЮИ-СГАП-СГЮА. Объединяем
          поколения, делимся опытом, создаем элиту юриспруденции вместе
        </p>
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up-d3">
          <a
            href="https://forms.gle/yFpGBYVXjrSgto7o8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-pill font-display font-bold text-base sm:text-lg bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(0,71,255,0.3)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_30px_rgba(0,71,255,0.4)] transition-all duration-300 ease-out no-underline relative overflow-hidden z-[1]"
          >
            Вступить в штаб
          </a>
          <button
            onClick={() => scrollTo("#gallery")}
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-pill font-display font-bold text-base sm:text-lg bg-transparent text-primary-foreground border border-primary-foreground/80 hover:border-primary-foreground hover:text-primary-foreground/90 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
          >
            События
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
