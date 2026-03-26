import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timeline = [
{
  year: "2021",
  title: "Основание штаба",
  description:
  "Группа активных выпускников СГЮА объединилась, чтобы создать площадку для обмена опытом между поколениями юристов. Так появился Штаб выпускников."
},
{
  year: "2022",
  title: "Первые проекты и менторство",
  description:
  "Запущена программа менторства: более 30 практикующих юристов стали наставниками для студентов. Проведены первые мастер-классы и нетворкинг-мероприятия."
},
{
  year: "2023",
  title: "Межвузовское сотрудничество",
  description:
  "Штаб вышел за пределы СГЮА — налажены партнёрства с юридическими факультетами других вузов. Организован первый форум молодых юристов Саратовской области."
},
{
  year: "2024",
  title: "Цифровая трансформация",
  description:
  "Запущена цифровая платформа штаба. Внедрены онлайн-форматы встреч, вебинары с ведущими экспертами отрасли, база знаний для участников."
},
{
  year: "2025",
  title: "Региональное развитие",
  description:
  "Укрепление связей с региональными юридическими сообществами. Запуск совместных проектов с адвокатскими палатами и нотариальными конторами."
},
{
  year: "2026",
  title: "Новые горизонты",
  description:
  "Программа стажировок, карьерный трекинг и международные связи. Штаб продолжает расти и объединять юристов разных поколений."
}];


const MissionPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-deep text-deep-foreground relative overflow-hidden">
        <div className="bg-shape w-[500px] h-[500px] bg-primary/15 -top-[150px] -right-[150px]" />
        <div className="container mx-auto text-center relative z-10">
          <p className="font-handwritten text-2xl mb-2 text-primary-foreground">Наша миссия</p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-extrabold tracking-tight mb-6">
            История <span className="text-primary">Молодежного штаба Ассоциации выпускников</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-[700px] mx-auto">
            Мы строим мост между поколениями юристов — от первых шагов в профессии
            до вершин карьеры. Узнайте, как всё начиналось и куда мы движемся.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-display font-extrabold mb-6">Зачем мы здесь</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Молодежный штаб Ассоциации выпускников — это сообщество, объединяющее тех, кто прошёл школу одного
            из сильнейших юридических вузов страны. Мы верим, что опыт выпускников —
            бесценный ресурс для тех, кто только начинает свой путь.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Наша миссия — создать экосистему поддержки, в которой каждый студент
            и молодой специалист получит доступ к знаниям, связям и возможностям,
            которые определяют успешную карьеру юриста.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-[800px]">
          <h2 className="text-3xl font-display font-extrabold mb-12 text-center">
            Хронология <span className="text-primary">развития</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />

            <div className="space-y-10">
              {timeline.map((item) =>
              <div key={item.year} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center shadow-lg relative z-10">
                    {item.year}
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-card flex-1">
                    <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-extrabold mb-4">
            Стань частью <span className="text-primary">истории</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-[500px] mx-auto">
            Присоединяйся к сообществу выпускников и помоги сделать будущее юридической профессии ярче.
          </p>
          <Link
            to="/#join"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-lg bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(0,71,255,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_30px_rgba(0,71,255,0.4)] transition-all">
            
            Вступить в штаб
          </Link>
        </div>
      </section>

      <Footer />
    </div>);

};

export default MissionPage;
