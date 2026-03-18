import mentor1 from "@/assets/mentor1.jpg";
import mentor2 from "@/assets/mentor2.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Mentors = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="mentors" className={`py-24 lg:py-32 scroll-reveal ${isVisible ? "visible" : ""}`}>
    <div className="container mx-auto">
      <div className="rounded-3xl p-8 md:p-12 lg:p-16 text-primary-foreground grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden shadow-[0_30px_60px_rgba(0,71,255,0.2)]"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)), #60A5FA)" }}>
          
        {/* Left text */}
        <div>
          <p className="font-handwritten text-primary-foreground/80 text-2xl mb-2">Закрытый клуб</p>
          <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-display font-extrabold text-primary-foreground tracking-tight mb-4">
            Найди своего Наставника
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">Получи персональные советы по построению карьеры от успешных выпускников СГЮА. Партнеры фирм, представители адвокатского сообщества, судьи, прокуроры, бизнес-сообщества готовы делиться опытом


            </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-lg bg-card text-deep shadow-card hover:-translate-y-1 hover:shadow-float transition-all border-none cursor-pointer">
            Смотреть анкеты менторов
          </button>
        </div>

        {/* Right — stacked mentor cards */}
        <div className="relative h-[300px] hidden md:block">
          {/* Card 1 */}
          <div
              className="absolute top-0 left-0 w-[280px] rounded-2xl p-5 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] -rotate-[5deg] z-[2] hover:-translate-y-2 hover:rotate-0 hover:scale-105 hover:z-10 transition-all"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
              
            <div className="flex items-center gap-3 mb-3">
              <img alt="Дмитрий Волков" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="/lovable-uploads/2bf6a6d0-bcbe-41de-b98a-0245a7063371.jpg" />
              <div>
                <p className="font-display font-bold text-sm text-primary-foreground">Несудимов Алексей</p>
<span className="text-xs bg-card text-primary px-2 py-0.5 rounded font-bold uppercase">АДВОКАТУРА</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 italic">"Научу строить личный бренд адвоката: стань тем, чье имя уже является защитой."

              </p>
          </div>

          {/* Card 2 */}
          <div className="absolute bottom-0 right-0 w-[280px] rounded-2xl p-5 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rotate-[5deg] z-[1] hover:-translate-y-2 hover:rotate-0 hover:scale-105 hover:z-10 transition-all" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
              
            <div className="flex items-center gap-3 mb-3">
              <img alt="Анна Лебедева" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="/lovable-uploads/57ae51d8-a0b5-4d62-b077-8d3b0a5a4d08.jpg" />
              <div>
                <p className="font-display font-bold text-sm text-primary-foreground">Новиков Богдан</p>
                <span className="text-xs bg-card text-primary px-2 py-0.5 rounded font-bold uppercase">ФИНАНСОВАЯ АНАЛИТКА</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 italic">"Научу архитектуре личного капитала: от студенческого бюджета до инвестиционного портфеля."

              </p>
          </div>
        </div>
      </div>
    </div>
  </section>);

};

export default Mentors;