import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const stats = [
{ value: "100+", label: "Активных резидентов штаба", color: "text-primary" },
{ value: "45", label: "Реализованных проектов", color: "text-accent" },
{ value: "10k", label: "Часов полезного нетворкинга", color: "text-primary" },
{ value: "100%", label: "Заряд на успех", color: "text-accent" }];


const chairpersons = [
{
  id: "chair-1",
  name: "Богдан Новиков",
  years: "2021",
  description: "Основатель штаба. Заложил фундамент организации и провел первые крупные мероприятия.",
  initials: "НБ",
  img: "/lovable-uploads/chair-novikov-bogdan.jpg"
},
{
  id: "chair-2",
  name: "Анна Новикова",
  years: "2021-2022",
  description: "Расширила сеть партнеров и запустила программу менторства для студентов.",
  initials: "НА",
  img: "/lovable-uploads/chair-novikova-anna.jpg"
},
{
  id: "chair-3",
  name: "Владислав Ситник",
  years: "2022-2023",
  description: "Вывел штаб на межвузовский уровень, организовал форум молодых юристов.",
  initials: "СВ",
  img: "/lovable-uploads/chair-sitnik-vladislav.jpg"
},
{
  id: "chair-4",
  name: "Ислам Эбзеев",
  years: "2023",
  description: "Развивал цифровое направление и международные связи штаба.",
  initials: "ЭИ",
  img: "/lovable-uploads/chair-ebzeev-islam.jpg"
},
{
  id: "chair-5",
  name: "Амир Тажибов",
  years: "2023-2025",
  description: "Укрепил взаимодействие с региональными юридическими сообществами.",
  initials: "ТА",
  img: "/lovable-uploads/chair-tazhibov-amir.jpg"
},
{
  id: "chair-6",
  name: "Руслан Каунов",
  years: "2025–н.в.",
  description: "Действующий председатель. Запустил программу стажировок и карьерного трекинга.",
  initials: "КР",
  img: "/lovable-uploads/chair-kaunov-ruslan.jpg"
}];


const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="about" className={`py-24 lg:py-32 relative overflow-hidden scroll-reveal ${isVisible ? "visible" : ""}`}>
      <div className="bg-shape w-[400px] h-[400px] bg-primary/20 -top-[100px] -right-[100px]" />
      <div className="bg-shape w-[300px] h-[300px] bg-accent/15 bottom-[10%] -left-[50px]" style={{ animationDelay: "-5s" }} />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div>
            <p className="font-handwritten text-xl md:text-2xl mb-2 text-destructive">Кто мы такие?</p>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold tracking-tight mb-6">
              Энергия академии<br />
              <span className="text-primary">Опыт выпускников</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Мы — мост между студенчеством и реальной юридической практикой. Наша цель — помочь молодым специалистам найти свой путь, опираясь на поддержку тех, кто уже прошел эту школу и стал лидером отрасли
            </p>
            <Link
              to="/mission"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-lg bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(0,71,255,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_30px_rgba(0,71,255,0.4)] transition-all cursor-pointer border-none">
              
              Подробнее о миссии
            </Link>
          </div>

          <div>
            <div className="relative rounded-3xl p-3 bg-card shadow-float mb-10">
              <img
                alt="Команда штаба"
                className="w-full rounded-2xl block h-[460px] object-cover object-top"
                src="/lovable-uploads/4f4d3394-03b9-40de-98fa-16a2f2ec4cfb.jpg" />
              
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) =>
              <div
                key={s.label}
                className="bg-card p-5 rounded-2xl shadow-card hover:-translate-y-2 hover:shadow-float transition-all relative overflow-hidden group">
                
                  <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(0,71,255,0.1)_0%,transparent_70%)] translate-x-[30%] -translate-y-[30%] rounded-full" />
                  <p className={`font-display text-4xl lg:text-[3.5rem] font-black leading-none mb-1 ${s.color}`}>
                    {s.value}
                  </p>
                  <p className="font-semibold text-sm text-deep">{s.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chairpersons section */}
        <div className="mt-24">
          <p className="font-handwritten text-xl md:text-2xl mb-2 text-center text-destructive">Руководство</p>
          <h3 className="text-[clamp(2rem,3vw,3rem)] font-display font-extrabold tracking-tight mb-12 text-center">
            Председатели <span className="text-primary">штаба</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chairpersons.map((person) =>
            <div
              key={person.id}
              className="bg-card rounded-2xl p-6 shadow-card hover:-translate-y-2 hover:shadow-float transition-all text-center group">
              
                <div className="mx-auto w-44 h-44 mb-6">
                  <Avatar className="w-44 h-44 border-2 border-border/60">
                    <AvatarImage src={person.img} alt={person.name} className="object-cover object-top" />
                    <AvatarFallback className="bg-primary/10 text-primary font-display font-bold text-2xl">
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h4 className="font-display font-bold text-lg mb-1">{person.name}</h4>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {person.years}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{person.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default About;
