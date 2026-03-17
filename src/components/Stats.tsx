const stats = [
  { value: "500+", label: "Активных резидентов" },
  { value: "42", label: "Реализованных проектов" },
  { value: "10k", label: "Часов нетворкинга" },
  { value: "85%", label: "Успешных стажировок" },
];

const Stats = () => (
  <section id="about" className="relative z-10 container mx-auto px-6 -mt-16 lg:-mt-24">
    <div className="bg-card rounded-2xl shadow-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
      {/* Left */}
      <div>
        <p className="text-xs font-bold uppercase text-spaced text-primary tracking-widest mb-4">
          КТО МЫ ТАКИЕ
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
          Энергия академии.{" "}
          <span className="text-primary">Опыт выпускников.</span>
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Мы — мост между студенчеством и реальной юридической практикой. Наша цель — помочь
          молодым специалистам найти свой путь, опираясь на поддержку тех, кто уже прошёл эту школу.
        </p>
      </div>

      {/* Right — stats grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border-l-4 border-primary pl-4 py-3"
          >
            <p className="text-3xl lg:text-4xl font-extrabold text-foreground">{s.value}</p>
            <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
