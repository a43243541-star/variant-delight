import { useState } from "react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Спасибо! Вы подписались на рассылку.");
      setEmail("");
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/" + id);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer ref={ref} id="footer" className={`bg-deep text-deep-foreground pt-20 pb-8 relative overflow-hidden scroll-reveal ${isVisible ? "visible" : ""}`}>
      {/* Giant background text */}
      <span className="absolute bottom-[-5vw] left-1/2 -translate-x-1/2 font-display font-black text-[25vw] text-primary-foreground/[0.02] whitespace-nowrap pointer-events-none select-none">
        СГЮА
      </span>

      <div className="container mx-auto relative z-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-[2fr_1fr_1.5fr] gap-10 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-[2.5rem] font-extrabold text-primary-foreground mb-4 leading-tight">
<br />
            </h3>
            <p className="text-primary-foreground/70 text-base leading-relaxed max-w-md">
              Твой социальный лифт в мире юриспруденции
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-primary-foreground/40 mb-5">
              Навигация
            </h4>
            <ul className="list-none space-y-3">
              {[{ label: "О штабе", href: "#about" }, { label: "Об Ассоциации", href: "#history" },

              { label: "Фотографии", href: "#gallery" }].
              map((l) =>
              <li key={l.href}>
                  <button
                  onClick={() => scrollTo(l.href)}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors bg-transparent border-none cursor-pointer text-base">
                  
                    {l.label}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter + socials */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-primary-foreground/40 mb-5">
              Будь в курсе
            </h4>
            <p className="text-primary-foreground/70 text-base mb-4 leading-relaxed">Не пропусти старт новых обучений и встреч с именитыми выпускниками

            </p>
            <form onSubmit={handleSubmit} className="flex gap-1 bg-primary-foreground/10 p-1 rounded-pill mb-5">
              <input
                type="email"
                placeholder="Твой E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-none px-4 py-2 text-primary-foreground outline-none placeholder:text-primary-foreground/50 text-sm" />
              
              <button
                type="submit"
                className="bg-card text-deep border-none px-5 py-2 rounded-pill font-bold cursor-pointer hover:scale-105 transition-transform text-sm">
                
                →
              </button>
            </form>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-semibold text-sm">Telegram</a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-semibold text-sm">ВКонтакте</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/50">
          <p>© 2024 Молодежный штаб Ассоциации выпускников "СЮИ-СГАП-СГЮА".  Все права защищены.</p>
          <p>г. Саратов, ул. Чернышевского, 104</p>
        </div>
      </div>
    </footer>);

};

export default Footer;