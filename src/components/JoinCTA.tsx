import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const JoinCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="join"
      className={`py-24 lg:py-32 bg-deep text-deep-foreground scroll-reveal ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto text-center max-w-3xl">
        <p className="font-handwritten text-primary text-2xl mb-2">Стань частью команды</p>
        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold tracking-tight text-primary-foreground mb-6">
          Присоединяйся к&nbsp;штабу
        </h2>
        <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">Молодежный штаб Ассоциации выпускников СГЮА — это сообщество амбициозных студентов и молодых юристов. Участвуй в проектах, находи наставников и строй карьеру вместе с лучшими
        </p>
        <a
          href="https://t.me/shtab_sgua"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal-scale inline-flex items-center gap-3 px-8 py-4 rounded-pill font-display font-bold text-base bg-primary text-primary-foreground hover:shadow-float hover:-translate-y-1 transition-all duration-300 no-underline">
          Вступить в штаб
          <ArrowRight size={20} />
        </a>
      </div>
    </section>);
};

export default JoinCTA;
