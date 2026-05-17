export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nunca me senti tão completamente eu mesma num evento. Foi como respirar fundo pela primeira vez em anos.",
      name: "Ana Clara",
      role: "Empresária · São Paulo",
      initials: "AC",
      color: "#b5554a",
    },
    {
      quote:
        "Saí de lá com amizades reais, novas perspectivas e uma chama que eu havia esquecido que existia dentro de mim.",
      name: "Mariana Luz",
      role: "Designer · Rio de Janeiro",
      initials: "ML",
      color: "#c9a96e",
    },
    {
      quote:
        "O cuidado com cada detalhe me mostrou que havia pessoas pensando em mim antes mesmo de eu chegar.",
      name: "Fernanda Costa",
      role: "Médica · Belo Horizonte",
      initials: "FC",
      color: "#6b2d3e",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="relative py-28"
      style={{ background: "linear-gradient(180deg, #1a1015 0%, #0f0a0c 100%)" }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.3))" }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a96e" }}>
            Depoimentos
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,169,110,0.3))" }} />
        </div>

        <div className="text-center mb-20">
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#e8d5c4",
            }}
          >
            Elas viveram.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a96e, #e8c98a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Elas falam.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl p-8 flex flex-col"
            >
              {/* Quote mark */}
              <div
                className="text-5xl mb-4 leading-none"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: t.color,
                  opacity: 0.5,
                }}
              >
                "
              </div>

              <p
                className="flex-1 mb-8 leading-relaxed"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  color: "rgba(232,213,196,0.8)",
                }}
              >
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                  style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "#e8d5c4" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(232,213,196,0.4)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
