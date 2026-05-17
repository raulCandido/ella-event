"use client";
export default function Experiences() {
  const experiences = [
    {
      number: "01",
      category: "Bem-estar",
      title: "Rituais de Cuidado",
      description:
        "Sessões imersivas de meditação guiada, aromaterapia e práticas de mindfulness criadas especialmente para mulheres em movimento.",
      color: "#b5554a",
    },
    {
      number: "02",
      category: "Conexão",
      title: "Rodas de Conversa",
      description:
        "Encontros íntimos facilitados por mulheres incríveis — espaços para compartilhar histórias, vulnerabilidades e conquistas sem filtros.",
      color: "#c9a96e",
    },
    {
      number: "03",
      category: "Conhecimento",
      title: "Masterclasses Exclusivas",
      description:
        "Painéis e workshops com especialistas femininas em negócios, saúde integrativa, finanças, criatividade e liderança.",
      color: "#6b2d3e",
    },
    {
      number: "04",
      category: "Experiência Sensorial",
      title: "Lounge & Networking",
      description:
        "Um ambiente sofisticado com experiências gastronômicas, arte e música — onde conexões acontecem naturalmente.",
      color: "#c9a96e",
    },
    {
      number: "05",
      category: "Transformação",
      title: "Sessão de Encerramento",
      description:
        "Uma cerimônia emocionante para selar intenções, celebrar cada presença e partir com o coração mais cheio.",
      color: "#b5554a",
    },
  ];

  return (
    <section
      id="experiencias"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a1015 0%, #241820 50%, #1a1015 100%)" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(107,45,62,0.15) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.3))" }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a96e" }}>
            Experiências
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
            }}
          >
            O que esperar de{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a96e, #e8c98a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ELLA
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed" style={{ color: "rgba(232,213,196,0.5)" }}>
            Cada momento foi pensado com cuidado e intenção para que você se sinta vista, acolhida e inspirada.
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative flex items-start gap-8 p-8 rounded-2xl transition-all duration-500 cursor-default card-glass hover:-translate-x-1"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px rgba(201,169,110,0.08)`;
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.12)";
              }}
            >
              {/* Number */}
              <div
                className="shrink-0 text-4xl font-thin"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: "rgba(201,169,110,0.2)",
                  lineHeight: 1,
                  minWidth: "3rem",
                }}
              >
                {exp.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                  <span
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{ color: exp.color }}
                  >
                    {exp.category}
                  </span>
                </div>
                <h3
                  className="mb-2 text-xl"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 500,
                    color: "#e8d5c4",
                  }}
                >
                  {exp.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(232,213,196,0.5)" }}>
                  {exp.description}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="shrink-0 self-center text-lg transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "rgba(201,169,110,0.3)" }}
              >
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
