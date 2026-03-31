import { Scale, BookOpen, Users, Megaphone, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const projectsData = [
  {
    id: "school",
    icon: Scale,
    title: "Школа молодого юриста",
    shortDesc: "Интенсивная программа для студентов: мастер-классы от практикующих юристов, разбор реальных кейсов и подготовка к первым шагам в профессии.",
    accent: "from-primary/20 to-primary/5",
    fullDescription: `Школа молодого юриста — флагманский образовательный проект Молодежного штаба Ассоциации выпускников, направленный на подготовку студентов к реальной юридической практике.

Программа включает:
• Мастер-классы от практикующих юристов с многолетним опытом
• Разбор реальных судебных кейсов и правовых ситуаций
• Практические занятия по составлению процессуальных документов
• Симуляции судебных заседаний с участием действующих судей
• Индивидуальные консультации по выбору специализации

За время работы программы более 200 студентов прошли обучение, многие из которых уже успешно трудоустроились в ведущие юридические фирмы и государственные органы.`,
    highlights: [
      "200+ выпускников программы",
      "30+ практикующих спикеров",
      "12 модулей обучения",
      "95% трудоустройство",
    ],
  },
  {
    id: "dialog",
    icon: Megaphone,
    title: "Диалог на равных",
    shortDesc: "Серия открытых встреч с представителями судебной системы, прокуратуры и адвокатуры — живой обмен опытом без формальностей.",
    accent: "from-accent/20 to-accent/5",
    fullDescription: `«Диалог на равных» — уникальный формат открытых встреч, где студенты и молодые юристы общаются напрямую с лидерами юридического сообщества.

Формат мероприятий:
• Неформальные встречи с судьями, прокурорами и адвокатами
• Панельные дискуссии по актуальным правовым вопросам
• Q&A-сессии без ограничений по темам
• Совместные обсуждения резонансных дел
• Нетворкинг-ужины с экспертами отрасли

Проект разрушает барьеры между поколениями юристов и создаёт атмосферу открытого профессионального диалога, где каждый голос важен.`,
    highlights: [
      "40+ проведённых встреч",
      "50+ приглашённых экспертов",
      "500+ участников",
      "Ежемесячный формат",
    ],
  },
  {
    id: "design",
    icon: BookOpen,
    title: "Лидеры Права",
    shortDesc: "Федеральный научно-образовательный конкурс среди молодых юристов.",
    accent: "from-primary/20 to-primary/5",
    fullDescription: `Лидеры Права — инновационный проект, направленный на выявление, поддержку и продвижение талантливой молодежи:
студентов, магистрантов, аспирантов и молодых специалистов.

Цель:
Поиск и развитие талантливых и инициативных молодых
специалистов для дальнейшей профессиональной адаптации, самореализации
в сферах государственного и муниципального управления,
правоохранительной и общественно-политической деятельности,
коммерческой и некоммерческой деятельности. Повышение престижа
юридического образования.

`,
    highlights: [
      "50+ образовательных блоков",
      "1000+ участников",
      "9 лет сотрудничества",
    ],
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Менторская программа",
    shortDesc: "Персональное наставничество от выпускников-лидеров отрасли. Карьерные стратегии, нетворкинг и поддержка на старте.",
    accent: "from-accent/20 to-accent/5",
    fullDescription: `Менторская программа — персональное наставничество для студентов и молодых юристов от успешных выпускников СГЮА.

Как работает программа:
• Подбор ментора на основе карьерных целей студента
• Регулярные встречи 1-на-1 в течение 6 месяцев
• Составление индивидуального плана развития
• Помощь в подготовке к стажировкам и собеседованиям
• Доступ к профессиональному нетворку ментора

Менторами выступают партнёры юридических фирм, руководители правовых департаментов крупных компаний, судьи и прокуроры — выпускники СГЮА, которые готовы делиться опытом.`,
    highlights: [
      "50+ активных менторов",
      "150+ менти за всё время",
      "6 месяцев программы",
      "85% достигают целей",
    ],
  },
];

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);
  const isLeaders = id === "design";
  const leadersImages = [
    "/lovable-uploads/Лидеры%20права%20жюри.jpg",
    "/lovable-uploads/лидер%203.jpg",
    "/lovable-uploads/лидер.jpg",
    "/lovable-uploads/лидеры%2000.jpg",
    "/lovable-uploads/лидеры%2022.jpg",
    "/lovable-uploads/лидеры%2033.jpg",
    "/lovable-uploads/лидеры%2099.jpg",
    "/lovable-uploads/лидеры%20права%201.jpg",
    "/lovable-uploads/лидерыыы.jpg",
    "/lovable-uploads/лидерыыы34.jpg",
  ];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Проект не найден</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            ← Вернуться к проектам
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-deep text-deep-foreground relative overflow-hidden">
        <div className={`bg-shape w-[500px] h-[500px] bg-gradient-to-br ${project.accent} -top-[150px] -right-[150px] opacity-40`} />
        <div className="container mx-auto relative z-10">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Все проекты
          </Link>
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-extrabold tracking-tight">
              {project.title}
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/70 max-w-[700px]">
            {project.shortDesc}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 relative overflow-hidden">
        {isLeaders && (
          <>
            <div className="hidden xl:flex flex-col gap-4 absolute left-6 top-20">
              {leadersImages.map((src) => (
                <img
                  key={`left-${src}`}
                  src={encodeURI(src)}
                  alt="Лидеры права"
                  className="w-40 h-56 object-cover rounded-xl shadow-sm"
                />
              ))}
            </div>
            <div className="hidden xl:flex flex-col gap-4 absolute right-6 top-20">
              {leadersImages.map((src) => (
                <img
                  key={`right-${src}`}
                  src={encodeURI(src)}
                  alt="Лидеры права"
                  className="w-40 h-56 object-cover rounded-xl shadow-sm"
                />
              ))}
            </div>
          </>
        )}
        <div className="container mx-auto max-w-[900px] relative z-10">
          <div className="grid md:grid-cols-[1fr_300px] gap-12">
            {/* Main text */}
            <div>
              <h2 className="text-2xl font-display font-extrabold mb-6">О проекте</h2>
              {project.fullDescription.split("\n\n").map((paragraph, i) => (
                <div key={i} className="mb-4">
                  {paragraph.includes("•") ? (
                    <ul className="space-y-2">
                      {paragraph.split("\n").map((line, j) =>
                        line.startsWith("•") ? (
                          <li key={j} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{line.replace("• ", "")}</span>
                          </li>
                        ) : (
                          <p key={j} className="text-muted-foreground leading-relaxed font-medium mb-2">
                            {line}
                          </p>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar highlights */}
            <div>
              <div className="bg-card rounded-2xl p-6 shadow-card sticky top-28">
                <h3 className="font-display font-bold text-lg mb-4">Ключевые цифры</h3>
                <div className="space-y-3">
                  {project.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm font-semibold">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-display font-extrabold mb-4">
            Хочешь участвовать?
          </h2>
          <p className="text-muted-foreground mb-6">
            Присоединяйся к проекту и начни свой путь к профессиональному росту.
          </p>
          <a
            href="https://forms.gle/yFpGBYVXjrSgto7o8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-pill font-display font-bold text-lg bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(0,71,255,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_30px_rgba(0,71,255,0.4)] transition-all no-underline"
          >
            Вступить в штаб
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectPage;
