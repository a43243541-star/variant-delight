import { useState } from "react";
import { Search, Filter, GraduationCap, Briefcase, Scale, BookOpen, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const mentors = [
{
  name: "Александр Козлов",
  img: "/lovable-uploads/a41f8955-1784-4f36-b6a3-3daa2e4aaf1c.jpg",
  specialty: "Прокурорский надзор",
  category: "prosecution",
  role: "Председатель Правления Ассоциации выпускников \"СЮИ-СГАП-СГЮА\", государственный советник юстиции 2 класса, Почетный работник прокуратуры Российской Федерации, кандидат юридических наук, выпускник 1991 года",
  experience: "35 лет",
  quote: "Научу ответственности за результат: прокурорская школа принятия решения.",
  available: true
},
{
  name: "Артин Василий",
  img: "/lovable-uploads/928f8173-c80f-49fe-9679-269667029d4f.png",
  specialty: "НЕСОСТОЯТЕЛЬНОСТЬ\nИ БАНКРОТСТВО",
  category: "criminal",
  role: "Руководитель команды арбитражных управляющих, основатель Группы Компаний «Федеральная Экспертная Служба», кандидат юридических наук, ",
  experience: "16 лет",
  quote: "Готов взять под крыло 2 студентов: пройдем путь от траектории арбитража до архитектуры антикризистного менеджмента вместе",
  available: true
},
{
  name: "Волкова Татьяна",
  img: "/lovable-uploads/f436f8ae-edcf-4b77-8b3d-a681038ee1fa.jpg",
  specialty: "Арбитражный процесс",
  category: "arbitration",
  role: "Зам. председателя Арбитражного суда, д.ю.н., профессор",
  experience: "20 лет",
  quote: "Научу анализировать сложные арбитражные дела и выстраивать правовую позицию.",
  available: false
},
{
  name: "Корума Кира",
  img: "/lovable-uploads/88792c33-6cb4-48ad-9094-b5a0d92a28f0.jpg",
  specialty: "ГРАЖДАНСКОЕ, СЕМЕЙНОЕ И НАСЛЕДСТВЕННОЕ ПРАВО, КОРПОРАТИВНЫЕ СПОРЫ",
  category: "civil",
  role: "Член Правления Ассоциации выпускников \"СЮИ-СГАП-СГЮА\", адвокат Адвокатской палаты г. Москва, выпускник 1990 года",
  experience: "36 лет",
  quote: "Поделюсь опытом работы в адвокатуре и помогу молодому юристу с разработкой траектории развития.",
  available: true
}];


const categories = [
{ id: "all", label: "Все", icon: BookOpen },
{ id: "prosecution", label: "Прокуратура", icon: Scale },
{ id: "criminal", label: "Уголовное", icon: Briefcase },
{ id: "arbitration", label: "Арбитраж", icon: GraduationCap },
{ id: "civil", label: "Гражданское", icon: BookOpen }];


const FindMentor = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSending(true);
    setTimeout(() => {
      toast.success(`Заявка отправлена наставнику ${selectedMentor?.name}!`);
      setFormData({ name: "", email: "", message: "" });
      setSelectedMentor(null);
      setSending(false);
    }, 600);
  };

  const filtered = mentors.filter((m) => {
    const matchCategory = activeCategory === "all" || m.category === activeCategory;
    const matchSearch =
    !searchQuery ||
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section
      ref={ref}
      id="find-mentor"
      className={`py-24 lg:py-32 bg-secondary scroll-reveal ${isVisible ? "visible" : ""}`}>
      
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-handwritten text-primary text-2xl mb-2">Персональный подход</p>
          <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-display font-extrabold tracking-tight mb-4">
            Найти наставника
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Выбери ментора по направлению и получи персональные консультации от лучших выпускников СГЮА
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 max-w-3xl mx-auto">
          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Поиск по имени или специальности..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-pill bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-display text-sm" />
            
          </div>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            {categories.map((cat) =>
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-pill text-sm font-display font-semibold border-none cursor-pointer transition-all ${
              activeCategory === cat.id ?
              "bg-primary text-primary-foreground shadow-md" :
              "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"}`
              }>
              
                <cat.icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            )}
          </div>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((mentor) =>
          <div
            key={mentor.name}
            className="group bg-card rounded-2xl border border-border overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_hsl(var(--primary)/0.12)] transition-all duration-300">
            
              {/* Avatar Header */}
              <div
              className="relative h-48 flex items-end justify-center pb-0 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)/0.08), hsl(var(--primary)/0.03))"
              }}>
              
                <img
                src={mentor.img}
                alt={mentor.name}
                className="w-28 h-28 rounded-full border-4 border-card object-cover shadow-lg translate-y-8 group-hover:scale-105 transition-transform duration-300" />
              
                {mentor.available &&
              <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 text-primary text-xs font-bold font-display">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Свободен
                  </span>
              }
              </div>

              {/* Info */}
              <div className="px-5 pt-10 pb-6 text-center">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{mentor.name}</h3>
                <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-pill font-bold font-display uppercase mb-2 whitespace-pre-line">
                  {mentor.specialty}
                </span>
                <p className="text-sm mb-1 text-muted-foreground whitespace-pre-line">{mentor.role}</p>
                <p className="text-xs text-muted-foreground/70 mb-4">Опыт: {mentor.experience}</p>
                <p className="text-sm text-foreground/70 italic leading-relaxed mb-5">
                  &ldquo;{mentor.quote}&rdquo;
                </p>
                <button
                onClick={() => setSelectedMentor(mentor)}
                className="w-full py-3 rounded-pill font-display font-bold text-sm bg-primary text-primary-foreground hover:shadow-float hover:-translate-y-0.5 transition-all border-none cursor-pointer">
                
                  Связаться
                </button>
              </div>
            </div>
          )}
        </div>

        {filtered.length === 0 &&
        <div className="text-center py-16">
            <p className="text-muted-foreground text-lg font-display">Наставники не найдены</p>
            <p className="text-muted-foreground/60 text-sm mt-2">Попробуйте изменить параметры поиска</p>
          </div>
        }
      </div>

      {/* Contact Dialog */}
      <Dialog open={!!selectedMentor} onOpenChange={(open) => !open && setSelectedMentor(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Связаться с {selectedMentor?.name}</DialogTitle>
            <DialogDescription>
              {selectedMentor?.specialty} · {selectedMentor?.experience} опыта
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label className="block text-sm font-display font-semibold text-foreground mb-1.5">Ваше имя</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Иван Иванов"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm" />
              
            </div>
            <div>
              <label className="block text-sm font-display font-semibold text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ivan@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm" />
              
            </div>
            <div>
              <label className="block text-sm font-display font-semibold text-foreground mb-1.5">Сообщение</label>
              <textarea
                required
                maxLength={1000}
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Расскажите, чем наставник может вам помочь..."
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none" />
              
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-pill font-display font-bold text-sm bg-primary text-primary-foreground hover:shadow-float hover:-translate-y-0.5 transition-all border-none cursor-pointer disabled:opacity-50">
              
              <Send className="w-4 h-4" />
              {sending ? "Отправка..." : "Отправить заявку"}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>);

};

export default FindMentor;