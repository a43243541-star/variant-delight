import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-deep/70 to-deep/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center lg:text-left lg:max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-tight opacity-0 animate-fade-up">
          Твой старт в большую{" "}
          <span className="font-handwritten text-5xl sm:text-6xl lg:text-8xl text-primary-foreground/90 inline-block -rotate-2">
            юридическую
          </span>{" "}
          карьеру.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75 opacity-0 animate-fade-up-delay-1 mx-auto lg:mx-0">
          Молодежный штаб Ассоциации выпускников СЮИ-СГАП-СГЮА. Объединяем поколения,
          делимся опытом, создаём будущее юриспруденции вместе.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up-delay-2">
          <Button
            size="lg"
            className="rounded-full bg-primary-foreground text-deep font-bold hover:bg-primary-foreground/90 text-base px-8"
            onClick={() => scrollTo("#footer")}
          >
            Присоединиться к команде
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 text-base px-8"
            onClick={() => scrollTo("#training")}
          >
            Узнать о событиях
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
