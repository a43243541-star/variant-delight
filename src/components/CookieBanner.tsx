import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[200] bg-deep text-primary-foreground rounded-2xl p-5 shadow-xl animate-fade-in">
      <p className="text-sm leading-relaxed mb-4">
        Мы используем cookies для улучшения работы сайта.
        Продолжая использование, вы соглашаетесь с{" "}
        <Link to="/cookies" className="underline text-primary-foreground/90 hover:text-primary-foreground">
          политикой использования cookies
        </Link>.
      </p>
      <div className="flex gap-3">
        <button
          onClick={accept}
          className="px-5 py-2 rounded-pill bg-card text-deep font-bold text-sm hover:scale-105 transition-transform"
        >
          Принять
        </button>
        <Link
          to="/cookies"
          className="px-5 py-2 rounded-pill border border-primary-foreground/30 text-primary-foreground font-bold text-sm hover:bg-primary-foreground/10 transition-colors no-underline"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default CookieBanner;
