import { useParams, Link } from "react-router-dom";
import { events } from "@/data/events";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold mb-4">Событие не найдено</h1>
            <Link to="/" className="text-primary hover:underline font-medium">
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Back link */}
          <Link
            to="/#gallery"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium mb-8"
          >
            <ArrowLeft size={18} />
            Назад к событиям
          </Link>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={event.src}
              alt={event.title}
              className="w-full h-[300px] sm:h-[420px] object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-pill bg-primary/10 text-primary text-sm font-semibold">
              <Tag size={14} />
              {event.cat}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
              <Calendar size={14} />
              {event.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-extrabold tracking-tight leading-tight mb-4">
            {event.title}
          </h1>

          {event.subtitle && (
            <p className="text-lg text-muted-foreground mb-6">{event.subtitle}</p>
          )}

          {/* Description */}
          <div className="prose prose-lg max-w-none text-foreground/85 leading-relaxed">
            <p>{event.description}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventPage;
