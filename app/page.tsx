import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experiences from "@/components/experiences";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export const metadata = {
  title: "Mulheres antes de tudo — Evento Exclusivo",
  description:
    "Um evento criado por mulheres, para mulheres. Conexão autêntica, bem-estar e empoderamento em cada detalhe.",
  openGraph: {
    title: "Mulheres antes de tudo — Evento Exclusivo",
    description: "Um espaço criado para despertar o que há de mais poderoso em você.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Testimonials />

        {/* CTA Section */}
        <section
          id="participar"
          className="relative py-28 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #0f0a0c 0%, #1a1015 50%, #0f0a0c 100%)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 mx-auto max-w-lg px-6 text-center">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.3))" }}
              />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a96e" }}>
                Participar
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to left, transparent, rgba(201,169,110,0.3))" }}
              />
            </div>

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
              Faça parte do próximo{" "}
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

            <p
              className="mx-auto mb-10"
              style={{
                color: "rgba(232,213,196,0.5)",
                lineHeight: 1.85,
                maxWidth: "38ch",
              }}
            >
              Seja a primeira a saber das novidades, datas e como garantir seu lugar no próximo evento.
            </p>

            <a
              href="#"
              className="btn-gold"
              style={{
                borderRadius: "3rem",
                padding: "1rem 2.4rem",
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
              }}
            >
              Quero ser avisada
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
