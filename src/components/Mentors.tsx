import { Link } from "react-router-dom";
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
          <p className="font-handwritten text-2xl mb-2 text-primary-foreground">Закрытый клуб</p>
          <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-display font-extrabold text-primary-foreground tracking-tight mb-4">
            Найди своего Наставника
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">Получи персональные советы по построению карьеры от успешных выпускников СГЮА. Партнеры фирм, представители адвокатского сообщества, судьи, прокуроры, бизнес-сообщества готовы делиться опытом


            </p>
          <Link to="/mentors" className="inline-flex items-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-lg bg-card text-deep shadow-card hover:-translate-y-1 hover:shadow-float transition-all no-underline">
            Смотреть анкеты менторов
          </Link>
        </div>

        {/* Right — stacked mentor cards */}
        <div className="hidden md:grid grid-cols-2 gap-6 items-start">
          {/* Card 1 */}
          <div
              className="w-[280px] rounded-2xl p-5 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
              
            <div className="flex items-center gap-3 mb-3">
              <img alt="Александр Козлов" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="/lovable-uploads/2-2.jpeg" />
              <div>
                <p className="font-display font-bold text-sm text-primary-foreground">Александр Козлов</p>
                <span className="text-xs bg-card text-primary px-2 py-0.5 rounded font-bold uppercase">ПРОКУРОРСКИЙ НАДЗОР</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 italic">"Научу ответственности за результат: прокурорская школа принятия решения."

              </p>
          </div>

          {/* Card 2 */}
          <div className="w-[280px] rounded-2xl p-5 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
              
            <div className="flex items-center gap-3 mb-3">
              <img alt="Василий Артин" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="/lovable-uploads/928f8173-c80f-49fe-9679-269667029d4f.png" />
              <div>
                <p className="font-display font-bold text-sm text-primary-foreground">Василий Артин</p>
                <span className="text-xs bg-card text-primary px-2 py-0.5 rounded font-bold uppercase">НЕСОСТОЯТЕЛЬНОСТЬ И БАНКРОТСТВО</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 italic">"Готов взять под крыло 2 студентов: пройдем путь от траектории арбитража до архитектуры антикризистного менеджмента вместе"

              </p>
          </div>
        </div>
      </div>
    </div>
  </section>);

};

export default Mentors;
