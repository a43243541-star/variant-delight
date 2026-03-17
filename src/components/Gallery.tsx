import { useState } from "react";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";

type Category = "Все" | "Обучения" | "Форумы" | "Неформальное";

const photos: { src: string; title: string; subtitle: string; cat: Exclude<Category, "Все">; tall?: boolean }[] = [
  { src: gallery3, title: "Форум молодых юристов", subtitle: "Дискуссия о будущем права", cat: "Форумы", tall: false },
  { src: gallery2, title: "Нетворкинг-сессия", subtitle: "Встреча с выпускниками 2015 года", cat: "Неформальное", tall: true },
  { src: gallery5, title: "Мастер-класс в суде", subtitle: "Практическое занятие", cat: "Обучения", tall: false },
  { src: gallery7, title: "Хакатон LegalTech", subtitle: "Командная работа студентов", cat: "Обучения", tall: true },
  { src: gallery8, title: "Награждение", subtitle: "Итоги года Ассоциации", cat: "Форумы", tall: false },
  { src: gallery1, title: "Семинар Legal Design", subtitle: "Интерактивный практикум", cat: "Обучения", tall: false },
];

const filters: Category[] = ["Все", "Обучения", "Форумы", "Неформальное"];

const Gallery = () => {
  const [active, setActive] = useState<Category>("Все");
  const filtered = active === "Все" ? photos : photos.filter((p) => p.cat === active);

  return (
    <section id="gallery" className="py-24 lg:py-32">
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
                className="w-full block transition-transform duration-500 group-hover:scale-105"
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
