import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import mentor1 from "@/assets/mentor1.jpg";
import mentor2 from "@/assets/mentor2.jpg";

const courses = [
  {
    tag: "Практикум",
    title: "Legal Design: Как оформлять документы, чтобы их читали",
    desc: "Отказ от \"канцелярита\". Визуализация правовых структур и убедительная аргументация в суде.",
    speaker: { name: "Артин Василий", role: "Партнер юр. фирмы", img: mentor1 },
    even: false,
  },
  {
    tag: "Мастер-класс",
    title: "Мастерство судебной речи",
    desc: "Разбор реальных кейсов. Как держать внимание судьи и оппонентов.",
    speaker: { name: "Волкова Татьяна", role: "Заместитель председателя Арбитражного суда Астраханской области, доктор юридических наук, профессор", img: mentor2 },
    even: true,
  },
  {
    tag: "Дискуссия",
    title: "Карьера: Госсектор vs Частный Консалтинг",
    desc: "Панельная дискуссия с представителями прокуратуры и топовых консалтинговых агентств.",
    speaker: { name: "Секретные спикеры", role: "Узнаешь на встрече", img: null },
    even: false,
  },
];

const Training = () => {
  const { ref: revealRef, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={revealRef} id="training" className={`py-24 lg:py-32 relative overflow-hidden scroll-reveal ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <p className="font-handwritten text-primary text-2xl mb-2">Прокачка скиллов</p>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold tracking-tight">
              Учимся у <span className="text-primary">практиков</span>
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-pill font-display font-bold text-sm bg-card text-deep shadow-card hover:-translate-y-1 hover:text-primary hover:shadow-float transition-all border-none cursor-pointer">
            Все программы <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
        >
          {courses.map((c, i) => (
            <div
              key={c.title}
              className="flex-shrink-0 w-[85vw] sm:w-[400px] snap-start bg-card rounded-2xl p-8 shadow-card hover:-translate-y-2 hover:shadow-float hover:border-primary transition-all border border-border/50"
            >
              <span
                className={`inline-block px-4 py-2 rounded-pill text-sm font-semibold mb-4 ${
                  i % 2 === 0
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {c.tag}
              </span>
              <h3 className="text-xl font-display font-bold text-deep mb-3 leading-snug">{c.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{c.desc}</p>

              {/* Speaker */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                {c.speaker.img ? (
                  <img src={c.speaker.img} alt={c.speaker.name} className="w-12 h-12 rounded-full object-cover bg-muted" />
                ) : (
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card" />
                    <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-card" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-sm text-deep">{c.speaker.name}</p>
                  <p className="text-xs text-muted-foreground">{c.speaker.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
