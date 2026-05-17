import Hero from "@/components/hero";
import FeedbackForm from "@/components/feedback-form";

export const metadata = {
  title: "Mulheres antes de tudo — Avalie o Evento",
  description:
    "Compartilhe sua experiência no evento da comunidade Mulheres antes de tudo. Criado por mulheres, para mulheres.",
  openGraph: {
    title: "Mulheres antes de tudo — Avalie o Evento",
    description: "Sua voz transforma o que criamos juntas.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FeedbackForm />
    </main>
  );
}
