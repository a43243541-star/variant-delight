import { useRef, useState, useCallback } from "react";
import historyOld from "@/assets/history-old.jpg";
import historyNew from "@/assets/history-new.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const History = () => {
  const { ref: revealRef, isVisible } = useScrollReveal();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const dragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current || !dragging.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { dragging.current = true; };
  const handleMouseUp = () => { dragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section ref={revealRef} id="history" className={`py-24 lg:py-32 bg-deep text-deep-foreground relative overflow-hidden scroll-reveal ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto text-center">
        <p className="font-handwritten text-primary text-2xl mb-2">Наследие</p>
        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display font-extrabold text-primary-foreground tracking-tight mb-4">
          Сила братства СЮИ-СГАП-СГЮА
        </h2>
        <p className="text-lg text-primary-foreground/70 max-w-[700px] mx-auto mb-4">
          Наша Альма-матер выпустила тысячи выдающихся судей, адвокатов и госслужащих.
          Ассоциация — это закрытое комьюнити, где статус выпускника открывает любые двери.
        </p>

        {/* Comparison slider */}
        <div
          ref={sliderRef}
          className="relative w-full max-w-[1000px] mx-auto mt-12 aspect-video rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* New image (full) */}
          <img src={historyNew} alt="Современный вуз" className="absolute inset-0 w-full h-full object-cover object-center" />
          
          {/* Old image (clipped) */}
          <div
            className="absolute top-0 left-0 bottom-0 overflow-hidden z-[2]"
            style={{ width: `${sliderPos}%`, borderRight: "4px solid hsl(var(--primary))" }}
          >
            <img
              src={historyOld}
              alt="Исторический вуз"
              className="h-full object-cover object-left-center sepia-[0.6] grayscale-[0.5]"
              style={{ width: sliderRef.current?.offsetWidth || "100vw" }}
            />
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 z-[3] w-9 h-9 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm shadow-lg pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: `translate(-50%, -50%)` }}
          >
            ↔
          </div>
        </div>

        <p className="text-sm text-primary-foreground/50 mt-4">
          Потяните ползунок, чтобы увидеть связь времен
        </p>
      </div>
    </section>
  );
};

export default History;
