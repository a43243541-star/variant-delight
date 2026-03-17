import associationImg from "@/assets/association.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "500+", label: "Активных резидентов штаба", color: "text-primary" },
  { value: "45", label: "Реализованных проектов", color: "text-accent" },
  { value: "10k", label: "Часов полезного нетворкинга", color: "text-primary" },
  { value: "100%", label: "Заряд на успех", color: "text-accent" },
];

const About = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background shapes */}
      <div className="bg-shape w-[400px] h-[400px] bg-primary/20 -top-[100px] -right-[100px]" />
      <div className="bg-shape w-[300px] h-[300px] bg-accent/15 bottom-[10%] -left-[50px]" style={{ animationDelay: "-5s" }} />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="font-handwritten text-primary text-2xl mb-2">Кто мы такие?</p>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold tracking-tight mb-6">
              Энергия академии.<br />
              <span className="text-primary">Опыт выпускников.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Мы — мост между студенчеством и реальной юридической практикой. Наша цель — помочь
              молодым специалистам найти свой путь, опираясь на поддержку тех, кто уже прошел эту школу и стал лидером отрасли.
            </p>
            <button
              onClick={() => scrollTo("#history")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-lg bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(0,71,255,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_30px_rgba(0,71,255,0.4)] transition-all cursor-pointer border-none"
            >
              Подробнее о миссии
            </button>
          </div>

          {/* Right — image + stats */}
          <div>
            {/* Image with rotation */}
            <div className="relative rounded-3xl p-3 bg-card shadow-float rotate-2 mb-10">
              <img
                src={associationImg}
                alt="Команда штаба"
                className="w-full rounded-2xl block h-[300px] object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-deep text-deep-foreground p-5 rounded-full font-display font-extrabold w-[100px] h-[100px] flex items-center justify-center text-center text-xs shadow-[0_10px_20px_rgba(10,25,48,0.3)] -rotate-[10deg] leading-tight">
                С 1931 года
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-card p-5 rounded-2xl shadow-card hover:-translate-y-2 hover:shadow-float transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(0,71,255,0.1)_0%,transparent_70%)] translate-x-[30%] -translate-y-[30%] rounded-full" />
                  <p className={`font-display text-4xl lg:text-[3.5rem] font-black leading-none mb-1 ${s.color}`}>
                    {s.value}
                  </p>
                  <p className="font-semibold text-sm text-deep">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
