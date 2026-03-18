import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scale, BookOpen, Users, Megaphone } from "lucide-react";

const projects = [
  {
    icon: Scale,
    title: "Школа молодого юриста",
    desc: "Интенсивная программа для студентов: мастер-классы от практикующих юристов, разбор реальных кейсов и подготовка к первым шагам в профессии.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Megaphone,
    title: "Диалог на равных",
    desc: "Серия открытых встреч с представителями судебной системы, прокуратуры и адвокатуры — живой обмен опытом без формальностей.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: BookOpen,
    title: "Legal Design Lab",
    desc: "Практикум по визуализации правовых документов: учимся делать юридические тексты понятными, современными и убедительными.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "Менторская программа",
    desc: "Персональное наставничество от выпускников-лидеров отрасли. Карьерные стратегии, нетворкинг и поддержка на старте.",
    accent: "from-accent/20 to-accent/5",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="projects"
      className={`py-24 lg:py-32 scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-handwritten text-primary text-2xl mb-2">
            Чем мы занимаемся
          </p>
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold tracking-tight">
            Наши <span className="text-primary">проекты</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* gradient blob */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
