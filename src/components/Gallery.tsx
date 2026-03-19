import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { events, EventItem } from "@/data/events";

type Category = "Все" | "Обучения" | "Форумы" | "Неформальное";

const filters: Category[] = ["Все", "Обучения", "Форумы", "Неформальное"];

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState<Category>("Все");
  const filtered = active === "Все" ? events : events.filter((p) => p.cat === active);

  return (
    <section ref={ref} id="gallery" className={`py-24 lg:py-32 scroll-reveal ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="font-handwritten text-primary text-2xl mb-2">Жизнь штаба</p>
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold tracking-tight">
            События в <span className="text-primary">лицах</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-3 rounded-pill font-semibold text-sm border-2 transition-all cursor-pointer ${
                active === f
                  ? "bg-deep text-deep-foreground border-deep"
                  : "bg-transparent text-muted-foreground border-border hover:bg-deep hover:text-deep-foreground hover:border-deep"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {filtered.map((p) => (
            <Link
              key={p.id}
              to={`/events/${p.id}`}
              className="break-inside-avoid mb-5 rounded-2xl overflow-hidden relative cursor-pointer group block no-underline"
            >
              <img
                src={p.src}
                alt={p.title}
                className="w-full block transition-transform duration-500 group-hover:scale-105 object-cover max-h-[320px]"
              />
              <div className="absolute bottom-0 left-0 w-full px-5 pb-4 pt-12 bg-gradient-to-t from-black/80 to-transparent text-primary-foreground translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-display font-bold text-sm">{p.title}</p>
                <p className="text-xs text-primary-foreground/70">{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
