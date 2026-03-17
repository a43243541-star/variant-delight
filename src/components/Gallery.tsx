import { useState } from "react";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

type Category = "Все" | "Обучения" | "Неформальные встречи" | "Форумы";

const photos: { src: string; title: string; cat: Exclude<Category, "Все">; tall?: boolean }[] = [
  { src: gallery1, title: "Семинар по Legal Design", cat: "Обучения", tall: false },
  { src: gallery2, title: "Вечерний нетворкинг", cat: "Неформальные встречи", tall: true },
  { src: gallery3, title: "Юридический форум 2024", cat: "Форумы", tall: false },
  { src: gallery4, title: "Бизнес-завтрак", cat: "Неформальные встречи", tall: false },
  { src: gallery5, title: "Мастерство судебной речи", cat: "Обучения", tall: true },
  { src: gallery6, title: "Встреча выпускников", cat: "Неформальные встречи", tall: false },
];

const filters: Category[] = ["Все", "Обучения", "Неформальные встречи", "Форумы"];

const Gallery = () => {
  const [active, setActive] = useState<Category>("Все");

  const filtered = active === "Все" ? photos : photos.filter((p) => p.cat === active);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase text-spaced text-primary tracking-widest mb-4">
            ЖИЗНЬ ШТАБА
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            События <span className="text-primary">в лицах</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((p) => (
            <div
              key={p.src}
              className="relative group overflow-hidden rounded-xl break-inside-avoid"
            >
              <img
                src={p.src}
                alt={p.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  p.tall ? "h-80" : "h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-primary-foreground font-semibold text-sm">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
