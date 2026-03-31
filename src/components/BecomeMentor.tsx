import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, GraduationCap, Users, Star } from "lucide-react";
import sguaBuilding from "@/assets/sgua-building.jpg";

const benefits = [
  { icon: GraduationCap, title: "Делись опытом", text: "Помогай студентам найти свой путь в юриспруденции" },
  { icon: Users, title: "Расширяй нетворк", text: "Знакомься с амбициозными молодыми специалистами" },
  { icon: Star, title: "Развивай бренд", text: "Укрепляй репутацию эксперта в профессиональном сообществе" },
];

const BecomeMentor = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={sguaBuilding}
          alt="Здание СГЮА"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep/85" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-destructive text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-2">Присоединяйся</p>
          <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-display font-extrabold tracking-tight text-primary-foreground mb-4">
            Стань наставником
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl mx-auto">
            Ты — успешный выпускник СГЮА? Поделись своим опытом с новым поколением юристов.
            Стань частью программы наставничества и помоги студентам построить карьеру мечты.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl p-6 text-center bg-white shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <b.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-deep mb-2">{b.title}</h3>
              <p className="text-deep/70 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://forms.gle/8p7FmcdwQXtihEsWA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-base bg-primary text-primary-foreground hover:shadow-float hover:-translate-y-1 transition-all no-underline"
          >
            Заполнить анкету наставника
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentor;
