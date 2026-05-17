"use client";
export default function About() {
  const pillars = [
    {
      icon: "✦",
      title: "Conexão Autêntica",
      description:
        "Um ambiente criado para você encontrar mulheres que inspiram, acolhem e crescem junto.",
    },
    {
      icon: "◈",
      title: "Bem-estar & Presença",
      description:
        "Experiências sensoriais que reconectam você consigo mesma — mente, corpo e essência.",
    },
    {
      icon: "◇",
      title: "Empoderamento Real",
      description:
        "Conversas, vivências e insights que transformam perspectiva e acendem o que há de mais poderoso em você.",
    },
    {
      icon: "✧",
      title: "Liberdade & Exclusividade",
      description:
        "Um espaço seguro, sofisticado e completamente seu. Sem julgamentos. Com toda a sua essência.",
    },
  ];

  return (
    <section id="o-evento" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #0f0a0c 0%, #1a1015 100%)" }}
      />

      {/* Side glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(181,85,74,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.3))" }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a96e" }}>
            O Evento
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,169,110,0.3))" }} />
        </div>

        <div className="text-center mb-20">
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#e8d5c4",
              lineHeight: 1.2,
            }}
          >
            Um encontro que{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a96e, #e8c98a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              você vai sentir
            </span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-base leading-relaxed"
            style={{ color: "rgba(232,213,196,0.55)" }}
          >
            ELLA não é apenas um evento. É uma experiência cuidadosamente construída para despertar o
            que há de mais poderoso dentro de cada mulher — conexão genuína, autoconhecimento e beleza
            em cada detalhe.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl p-8 group transition-all duration-500 hover:-translate-y-1"
              style={{
                boxShadow: "0 0 0 rgba(201,169,110,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(201,169,110,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(201,169,110,0)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.12)";
              }}
            >
              <div
                className="text-2xl mb-5"
                style={{ color: "#c9a96e" }}
              >
                {pillar.icon}
              </div>
              <h3
                className="mb-3 text-lg"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 500,
                  color: "#e8d5c4",
                }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(232,213,196,0.5)" }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
