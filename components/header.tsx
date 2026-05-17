"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(15, 10, 12, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span
            className="text-2xl tracking-[0.35em] uppercase"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontStyle: "italic",
              background: "linear-gradient(135deg, #c9a96e, #e8c98a, #c9a96e)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ELLA
          </span>
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "rgba(232,213,196,0.4)", fontWeight: 300 }}
          >
            Evento Exclusivo
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["O Evento", "Experiências", "Depoimentos", "Participar"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ color: "rgba(232,213,196,0.55)", fontWeight: 400 }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,213,196,0.55)")}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#participar"
          className="btn-gold hidden md:inline-flex text-xs"
        >
          Quero Participar
        </a>
      </div>
    </header>
  );
}
