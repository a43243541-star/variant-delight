import mentor1 from "@/assets/mentor1.jpg";
import mentor2 from "@/assets/mentor2.jpg";
import mentor3 from "@/assets/mentor3.jpg";

const mentors = [
  { name: "Александр Иванов", role: "Партнер юр. фирмы, г. Москва", img: mentor1 },
  { name: "Елена Смирнова", role: "Судья в отставке, г. Саратов", img: mentor2 },
  { name: "Михаил Волков", role: "Head of Legal, IT Corp", img: mentor3 },
];

const Mentors = () => (
  <section id="mentors" className="py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <p className="text-xs font-bold uppercase text-spaced text-primary tracking-widest mb-4">
          ЗАКРЫТЫЙ МОДУЛЬ
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
          Найти <span className="text-primary">Наставника</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Программа менторства от успешных выпускников. Подай заявку и получи личного куратора
          из топ-менеджмента юрфирм или госсектора.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {mentors.map((m) => (
          <div
            key={m.name}
            className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
          >
            <div className="overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-foreground text-lg">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Mentors;
