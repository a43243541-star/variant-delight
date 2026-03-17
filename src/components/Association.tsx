import associationImg from "@/assets/association.jpg";

const Association = () => (
  <section id="association" className="py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src={associationImg}
            alt="Ассоциация выпускников СГЮА"
            className="w-full h-[400px] lg:h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700" />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-bold uppercase text-spaced text-primary tracking-widest mb-4">
            НАСЛЕДИЕ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
            Сила братства{" "}
            <span className="font-handwritten text-4xl lg:text-5xl text-primary inline-block -rotate-1">
              СЮИ-СГАП-СГЮА
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Наша Альма-матер выпустила тысячи выдающихся судей, адвокатов, прокуроров и госслужащих.
            Ассоциация — это закрытое комьюнити, где статус выпускника открывает любые двери.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Молодежный штаб</strong> — ваш проводник в это сообщество.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Association;
