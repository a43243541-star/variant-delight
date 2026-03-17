import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    tag: "Soft Skills",
    tagColor: "bg-emerald-500/20 text-emerald-400",
    title: "Legal Design",
    desc: "Как оформлять юридические документы так, чтобы их читали и понимали. Основы типографики и структуры для юристов.",
  },
  {
    tag: "Hard Skills",
    tagColor: "bg-amber-500/20 text-amber-400",
    title: "Мастерство судебной речи",
    desc: "Спикер: известный адвокат-выпускник. Разбор реальных кейсов, постановка голоса и аргументации.",
  },
  {
    tag: "Карьера",
    tagColor: "bg-violet-500/20 text-violet-400",
    title: "Госсектор vs Консалтинг",
    desc: "Панельная дискуссия с выпускниками из обоих секторов. Что выбрать и почему.",
  },
  {
    tag: "Нетворкинг",
    tagColor: "bg-rose-500/20 text-rose-400",
    title: "Бизнес-завтрак",
    desc: "Неформальные встречи с менторами за чашкой кофе. Реальные истории успеха.",
  },
];

const Training = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="training" className="py-24 lg:py-32 bg-deep text-deep-foreground">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold uppercase text-spaced text-primary tracking-widest mb-4">
              ПРОКАЧКА СКИЛЛОВ
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
              Не только теория:{" "}
              <span className="text-primary">учимся у практиков</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full border-deep-foreground/20 text-deep-foreground hover:bg-deep-foreground/10"
              onClick={() => scroll(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full border-deep-foreground/20 text-deep-foreground hover:bg-deep-foreground/10"
              onClick={() => scroll(1)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {courses.map((c) => (
            <div
              key={c.title}
              className="min-w-[300px] max-w-[320px] flex-shrink-0 snap-start bg-deep-foreground/5 border border-deep-foreground/10 rounded-2xl p-6 hover:bg-deep-foreground/10 transition-colors group"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${c.tagColor}`}>
                {c.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm text-deep-foreground/60 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
