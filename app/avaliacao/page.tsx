import Hero from "@/components/hero";
import FeedbackForm from "@/components/feedback-form";
import Footer from "@/components/footer";

export const metadata = {
  title: "Avalie o Evento — Mulheres antes de tudo",
  description:
    "Compartilhe sua experiência no evento da comunidade Mulheres antes de tudo. Criado por mulheres, para mulheres.",
  openGraph: {
    title: "Mulheres antes de tudo — Avalie o Evento",
    description: "Sua voz transforma o que criamos juntas.",
    type: "website",
  },
};

export default function Avaliacao() {
  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(15, 10, 12, 0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(201,169,110,0.12)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
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

          <a
            href="/"
            className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-colors duration-300"
            style={{ color: "rgba(232,213,196,0.45)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a96e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(232,213,196,0.45)")}
          >
            ← Início
          </a>
        </div>
      </header>

      <main className="pt-[72px]">
        <Hero
          subtitle="Sua presença foi nossa maior inspiração"
          description="Obrigada por ter escolhido estar aqui. Sua experiência é o que nos guia para criar momentos cada vez mais bonitos e significativos."
          cta={{ text: "Avaliar o evento", href: "#avaliacao" }}
        />
        <FeedbackForm />
      </main>

      <Footer />
    </>
  );
}
