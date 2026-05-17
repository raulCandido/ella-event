"use client";
export default function Footer() {
  return (
    <footer className="relative py-16" style={{ background: "#0f0a0c" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent)" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div
              className="text-3xl mb-2 tracking-[0.35em] uppercase"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontStyle: "italic",
                background: "linear-gradient(135deg, #c9a96e, #e8c98a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ELLA
            </div>
            <p className="text-xs" style={{ color: "rgba(232,213,196,0.3)", letterSpacing: "0.15em" }}>
              Criado por mulheres · Para mulheres
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs" style={{ color: "rgba(232,213,196,0.25)", letterSpacing: "0.1em" }}>
              © 2025 ELLA Evento Exclusivo. Todos os direitos reservados.
            </p>
            <p className="text-xs" style={{ color: "rgba(232,213,196,0.18)" }}>
              Um espaço criado com amor e intenção.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["Instagram", "TikTok", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: "rgba(232,213,196,0.3)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,213,196,0.3)")}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
