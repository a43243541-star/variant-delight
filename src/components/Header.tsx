import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "О штабе", href: "#about" },
  { label: "Об Ассоциации", href: "#association" },
  { label: "Обучения", href: "#training" },
  { label: "Фотографии", href: "#gallery" },
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-deep/80 shadow-xl backdrop-blur-lg"
            : "bg-deep/40 backdrop-blur-md"
        }`}
      >
        <a href="#" className="text-lg font-bold text-primary-foreground tracking-tight">
          МШ <span className="text-primary">СГЮА</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={() => handleNav("#footer")}
          >
            Вступить в штаб
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-deep/95 backdrop-blur-lg p-6 md:hidden shadow-2xl animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="text-base font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors w-full text-left"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <Button
                className="w-full rounded-full bg-primary text-primary-foreground font-semibold"
                onClick={() => handleNav("#footer")}
              >
                Вступить в штаб
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
