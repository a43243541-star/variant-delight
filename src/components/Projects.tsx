import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { projectsData } from "@/pages/ProjectPage";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="projects"
      className={`py-24 lg:py-32 scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="font-handwritten text-primary text-2xl mb-2">
            Чем мы занимаемся
          </p>
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold tracking-tight">
            Наши <span className="text-primary">проекты</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projectsData.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 no-underline"
            >
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
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {p.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Подробнее <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;