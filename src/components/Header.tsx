import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "О штабе", href: "#about" },
  { label: "Об Ассоциации", href: "#history" },
  { label: "Обучения", href: "#training" },
  { label: "Наставники", href: "#find-mentor" },
  { label: "События", href: "#gallery" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1400px] z-[100] rounded-pill border border-white/40"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 font-display font-extrabold text-lg text-deep no-underline"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-extrabold text-sm">
            Ш
          </div>
          Штаб СГЮА
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="text-[0.95rem] font-medium text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("#footer")}
          className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill font-display font-bold text-sm bg-primary text-primary-foreground hover:shadow-float hover:-translate-y-0.5 transition-all cursor-pointer border-none"
        >
          Вступить в штаб
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 animate-fade-in">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer w-full text-left"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav("#footer")}
                className="w-full px-6 py-3 rounded-pill font-display font-bold text-sm bg-primary text-primary-foreground border-none cursor-pointer"
              >
                Вступить в штаб
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
