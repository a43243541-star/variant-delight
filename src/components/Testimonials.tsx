import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Алина П.",
    meta: "3 курс, Институт прокуратуры",
    text: "«Благодаря штабу я нашла наставника и впервые поучаствовала в живом разборе кейсов. Это сильно помогло понять, куда двигаться дальше.»",
    initials: "АП"
  },
  {
    name: "Илья С.",
    meta: "4 курс, Институт юстиции",
    text: "«Проекты штаба дали реальные контакты и понимание рынка. После участия в мероприятиях стало проще выбрать практику.»",
    initials: "ИС"
  },
  {
    name: "Мария К.",
    meta: "2 курс, Институт адвокатуры",
    text: "«Очень ценю поддержку и атмосферу сообщества. Встречи с выпускниками мотивируют и дают ясный план развития.»",
    initials: "МК"
  }
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-24 lg:py-32 bg-muted/20 scroll-reveal ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-destructive text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-2">
            Отзывы
          </p>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-display font-extrabold tracking-tight">
            Что говорят участники
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl shadow-md p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-display font-bold flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-bold text-base text-deep">{t.name}</p>
                  <p className="text-sm text-deep/60">{t.meta}</p>
                </div>
              </div>
              <p className="text-sm text-deep/80 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
