import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { events } from "@/data/events";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section ref={ref} id="gallery" className={`py-24 lg:py-32 scroll-reveal ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-handwritten text-2xl mb-2 text-destructive">Жизнь штаба</p>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold tracking-tight">
              События в <span className="text-primary">лицах</span>
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border-2 border-border hover:bg-deep hover:text-deep-foreground hover:border-deep transition-all flex items-center justify-center cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border-2 border-border hover:bg-deep hover:text-deep-foreground hover:border-deep transition-all flex items-center justify-center cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Film strip */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] snap-x snap-mandatory pb-4">
        {events.map((p, i) =>
        <Link
          key={p.id}
          to={`/events/${p.id}`}
          className="reveal-child shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden relative cursor-pointer group block no-underline snap-start"
          style={{ transitionDelay: `${0.08 * i}s` }}>
            <img
            src={p.src}
            alt={p.title}
            className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full px-5 pb-4 pt-12 bg-gradient-to-t from-black/80 to-transparent text-primary-foreground translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-display font-bold text-sm">{p.title}</p>
              <p className="text-xs text-primary-foreground/70">{p.subtitle}</p>
            </div>
          </Link>
        )}
      </div>
    </section>);
};

export default Gallery;
