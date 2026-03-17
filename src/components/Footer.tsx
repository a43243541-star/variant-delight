import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Спасибо! Вы подписались на рассылку.");
      setEmail("");
    }
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-deep text-deep-foreground pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold">
              МШ <span className="text-primary">СГЮА</span>
            </h3>
            <p className="mt-4 text-sm text-deep-foreground/60 leading-relaxed">
              Объединяем поколения, делимся опытом, создаём будущее юриспруденции вместе.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-deep-foreground/40 mb-4">
              Навигация
            </h4>
            <ul className="space-y-3">
              {[
                { label: "О штабе", href: "#about" },
                { label: "Об Ассоциации", href: "#association" },
                { label: "Обучения", href: "#training" },
                { label: "Галерея", href: "#gallery" },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-deep-foreground/60 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-deep-foreground/40 mb-4">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm text-deep-foreground/60">
              <li>ул. Вольская, 1, Саратов</li>
              <li>info@msh-sgua.ru</li>
              <li>+7 (999) 123-45-67</li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="hover:text-primary transition-colors font-semibold">VK</a>
                <a href="#" className="hover:text-primary transition-colors font-semibold">Telegram</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-deep-foreground/40 mb-4">
              Рассылка
            </h4>
            <p className="text-sm text-deep-foreground/60 mb-4">
              Не пропусти старт новых обучений и встреч.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <Input
                type="email"
                placeholder="Твой E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-l-full rounded-r-none bg-deep-foreground/10 border-deep-foreground/10 text-deep-foreground placeholder:text-deep-foreground/30 focus-visible:ring-primary"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-r-full rounded-l-none bg-primary text-primary-foreground hover:bg-primary/90 px-4"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-deep-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-deep-foreground/40">
          <p>© МШ СГЮА 2024 Молодежный штаб Ассоциации выпускников СГЮА</p>
          <p>Разработано с душой.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
