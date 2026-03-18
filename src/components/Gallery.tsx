import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";



type Category = "Все" | "Обучения" | "Форумы" | "Неформальное";

const photos: { src: string; title: string; subtitle: string; cat: Exclude<Category, "Все">; tall?: boolean }[] = [
  { src: "/lovable-uploads/gallery-award.jpg", title: "Лидеры права - 2025", subtitle: "", cat: "Форумы", tall: false },
  { src: "/lovable-uploads/d5a716e4-34b8-4404-b405-51bb34374f66.jpg", title: "Диалог на равных с сотрудником прокуратуры", subtitle: "Встреча с выпускником 2025 года", cat: "Неформальное", tall: true },
  { src: "/lovable-uploads/b3420278-3f65-446e-9ccb-dea71e642bad.jpg", title: "Лидеры права на ПМЮФ", subtitle: "\n", cat: "Обучения", tall: false },
  { src: "/lovable-uploads/a44958e4-c24f-4103-a79f-09362e78214f.jpg", title: "Награждение Молодежного штаба Ассоциации выпускников \"СЮИ-СГАП-СГЮА\"", subtitle: "\n", cat: "Обучения", tall: true },
  { src: "/lovable-uploads/26d78a20-c191-46eb-84e7-1f1886835840.jpg", title: "Школа молодого юриста - 2025", subtitle: "\n", cat: "Форумы", tall: false },
  { src: "/lovable-uploads/9f018789-6854-4c56-8c89-c392290b629b.jpg", title: "Телемост с молодыми специалистами", subtitle: "Диалог на равных", cat: "Обучения", tall: false },
  { src: "/lovable-uploads/saratov-forum.jpg", title: "Саратовский юридический форум", subtitle: "\n", cat: "Форумы", tall: false },
  { src: "/lovable-uploads/association-award.jpg", title: "Награждение Ассоциации выпускников", subtitle: "", cat: "Форумы", tall: false },
  { src: "/lovable-uploads/charity-event.jpg", title: "Благотворительное мероприятие", subtitle: "", cat: "Неформальное", tall: false },
];

const filters: Category[] = ["Все", "Обучения", "Форумы", "Неформальное"];

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState<Category>("Все");
  const filtered = active === "Все" ? photos : photos.filter((p) => p.cat === active);

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
            <div
              key={p.src + p.title}
              className="break-inside-avoid mb-5 rounded-2xl overflow-hidden relative cursor-pointer group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
