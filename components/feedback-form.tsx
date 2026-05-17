"use client";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE FORMS INTEGRATION
// ─────────────────────────────────────────────────────────────────────────────
//
// FORM_ID atual:
//   1FAIpQLSdLTqWCPJyokLW5B_nXUgQR0ucxTYeDlUwUULiWxdHfn88YiQ
//
// Para substituir o formulário por outro, altere apenas GOOGLE_FORM_ID abaixo.
//
// Como descobrir os entry IDs de outro formulário:
//   1. Abra o Google Forms no navegador
//   2. Clique em ⋮ → "Obter link pré-preenchido"
//   3. Preencha cada campo com valores fictícios (ex: "teste")
//   4. Clique em "Gerar link"
//   5. Copie a URL gerada — ela terá o formato:
//      https://docs.google.com/.../viewform?entry.XXXXXXXXX=teste&entry.YYYYYYYYY=outro
//   6. Cada "entry.XXXXXXXXX" é o ID do campo correspondente
//
// Campos mapeados neste formulário:
//   entry.1270508823 → Avaliação (opções exatas no Google Forms: "Ruim", "Bom", "Otimo")
//   entry.1208907594 → Comentário (texto livre, opcional)
// ─────────────────────────────────────────────────────────────────────────────

const GOOGLE_FORM_ID =
  "1FAIpQLSdLTqWCPJyokLW5B_nXUgQR0ucxTYeDlUwUULiWxdHfn88YiQ";

const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

// Mapeamento dos nossos valores internos para os valores exatos do Google Forms.
// ATENÇÃO: os valores devem ser idênticos às opções cadastradas no formulário.
const RATING_MAP: Record<string, string> = {
  ruim: "Ruim",
  bom: "Bom",
  otimo: "Otimo", // sem acento — exatamente como está cadastrado no Google Forms
};

interface SubmitData {
  rating: string;
  comment: string;
}

/**
 * Envia os dados do formulário para o Google Forms de forma silenciosa.
 *
 * Usa mode: "no-cors" porque o Google Forms não permite CORS de origens externas.
 * Com no-cors, a resposta é opaca — não é possível verificar sucesso/erro pela rede,
 * mas o envio chega corretamente ao Google Forms se os entry IDs estiverem corretos.
 *
 * Para adicionar novos campos:
 *   formData.append("entry.XXXXXXXXX", value);
 *   Substitua XXXXXXXXX pelo ID descoberto via link pré-preenchido.
 */
async function submitToGoogleForms(data: SubmitData): Promise<void> {
  const formData = new FormData();

  // entry.1270508823 → campo de avaliação (múltipla escolha)
  formData.append("entry.1270508823", RATING_MAP[data.rating] ?? data.rating);

  // entry.1208907594 → campo de comentário (texto longo, opcional)
  // Envia apenas se houver conteúdo; campos vazios no Google Forms ficam em branco
  if (data.comment.trim()) {
    formData.append("entry.1208907594", data.comment.trim());
  }

  await fetch(GOOGLE_FORM_URL, {
    method: "POST",
    mode: "no-cors", // obrigatório — o Google Forms bloqueia CORS de outros domínios
    body: formData,
  });
  // A resposta é sempre opaca com no-cors. Tratamos qualquer retorno como sucesso.
}

// ─────────────────────────────────────────────────────────────────────────────

type Rating = "ruim" | "bom" | "otimo";

interface RatingOption {
  value: Rating;
  label: string;
  selectedColor: string;
  selectedBg: string;
  selectedBorder: string;
  glow: string;
}

const RATINGS: RatingOption[] = [
  {
    value: "ruim",
    label: "Ruim",
    selectedColor: "#e8908a",
    selectedBg: "rgba(181,85,74,0.13)",
    selectedBorder: "rgba(181,85,74,0.6)",
    glow: "0 0 28px rgba(181,85,74,0.22)",
  },
  {
    value: "bom",
    label: "Bom",
    selectedColor: "#c9a96e",
    selectedBg: "rgba(201,169,110,0.11)",
    selectedBorder: "rgba(201,169,110,0.55)",
    glow: "0 0 28px rgba(201,169,110,0.2)",
  },
  {
    value: "otimo",
    label: "Ótimo",
    selectedColor: "#e8c98a",
    selectedBg: "rgba(232,201,138,0.13)",
    selectedBorder: "#e8c98a",
    glow: "0 0 32px rgba(232,201,138,0.28)",
  },
];

export default function FeedbackForm() {
  const [rating, setRating] = useState<Rating | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Bloqueia envio sem avaliação selecionada ou durante envio em curso
    if (!rating || loading) return;

    setLoading(true);
    try {
      await submitToGoogleForms({ rating, comment });
    } catch {
      // Em modo no-cors erros de rede são silenciosos.
      // Mesmo assim exibimos o estado de sucesso para não frustrar a usuária.
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <section
        id="avaliacao"
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
        style={{ background: "linear-gradient(180deg, #0f0a0c 0%, #1a1015 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(107,45,62,0.18) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 text-center max-w-xs mx-auto success-card">
          <div
            className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full mx-auto mb-9"
            style={{
              background: "rgba(201,169,110,0.07)",
              border: "1px solid rgba(201,169,110,0.22)",
              backdropFilter: "blur(12px)",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="#c9a96e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.9rem, 7vw, 2.8rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#e8d5c4",
              lineHeight: 1.25,
            }}
          >
            Obrigada,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a96e, #e8c98a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              de coração
            </span>
          </h2>

          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(232,213,196,0.45)",
              lineHeight: 1.9,
            }}
          >
            Sua avaliação nos toca e nos inspira. Cada opinião importa para que
            possamos continuar criando momentos que te fazem sentir exatamente
            onde deve estar.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.25))" }}
            />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ color: "rgba(201,169,110,0.35)" }}
            >
              Mulheres antes de tudo
            </span>
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(to left, transparent, rgba(201,169,110,0.25))" }}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="avaliacao"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f0a0c 0%, #1a1015 55%, #0f0a0c 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(107,45,62,0.14) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-sm w-full">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-9">
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.25))" }}
          />
          <span
            className="text-xs tracking-[0.28em] uppercase shrink-0"
            style={{ color: "rgba(201,169,110,0.55)" }}
          >
            Avaliação
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to left, transparent, rgba(201,169,110,0.25))" }}
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.7rem, 7vw, 2.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#e8d5c4",
              lineHeight: 1.3,
            }}
          >
            O que você achou do nosso evento?
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Rating buttons */}
          <div className="grid grid-cols-3 gap-3 mb-9">
            {RATINGS.map((opt) => {
              const selected = rating === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setRating(opt.value)}
                  disabled={loading}
                  className="flex flex-col items-center justify-center rounded-2xl transition-all duration-300"
                  style={{
                    minHeight: "112px",
                    padding: "1.4rem 0.5rem",
                    border: selected
                      ? `1px solid ${opt.selectedBorder}`
                      : "1px solid rgba(201,169,110,0.12)",
                    background: selected ? opt.selectedBg : "rgba(26,16,21,0.5)",
                    backdropFilter: "blur(10px)",
                    boxShadow: selected ? opt.glow : "none",
                    transform: selected ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.6 : 1,
                  }}
                >
                  {/* Selection indicator */}
                  <div
                    className="w-1.5 h-1.5 rounded-full mb-3 transition-all duration-300"
                    style={{
                      background: selected ? opt.selectedColor : "rgba(201,169,110,0.2)",
                      boxShadow: selected ? `0 0 8px ${opt.selectedColor}` : "none",
                    }}
                  />
                  <span
                    className="transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.2rem",
                      fontWeight: selected ? 400 : 300,
                      fontStyle: "italic",
                      color: selected ? opt.selectedColor : "rgba(232,213,196,0.35)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Glass card — comment + submit */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(26,16,21,0.5)",
              border: "1px solid rgba(201,169,110,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Comment textarea */}
            <div className="p-5">
              <label
                className="block mb-3"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(201,169,110,0.5)",
                }}
              >
                Comentário{" "}
                <span
                  style={{
                    textTransform: "none",
                    letterSpacing: "normal",
                    color: "rgba(232,213,196,0.2)",
                    fontSize: "0.75rem",
                  }}
                >
                  (opcional)
                </span>
              </label>
              <textarea
                rows={4}
                placeholder="Deseja compartilhar algum comentário ou sugestão?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                disabled={loading}
                className="feedback-textarea w-full rounded-xl transition-all duration-200"
                style={{
                  background: "rgba(15,10,12,0.5)",
                  border: "1px solid rgba(201,169,110,0.1)",
                  padding: "0.9rem 1rem",
                  color: "#e8d5c4",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  outline: "none",
                  resize: "none",
                  opacity: loading ? 0.5 : 1,
                }}
                onFocus={(e) => {
                  if (loading) return;
                  e.target.style.borderColor = "rgba(201,169,110,0.35)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(201,169,110,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Divider */}
            <div
              className="h-px mx-5"
              style={{ background: "rgba(201,169,110,0.08)" }}
            />

            {/* Submit */}
            <div className="p-5">
              <button
                type="submit"
                disabled={!rating || loading}
                className="w-full btn-gold transition-all duration-300"
                style={{
                  borderRadius: "0.875rem",
                  padding: "1rem",
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  opacity: !rating || loading ? 0.38 : 1,
                  cursor: !rating || loading ? "not-allowed" : "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {loading ? "Enviando..." : "Enviar Avaliação"}
              </button>

              {!rating && !loading && (
                <p
                  className="text-center mt-3"
                  style={{ fontSize: "0.75rem", color: "rgba(232,213,196,0.22)" }}
                >
                  Selecione uma avaliação para continuar
                </p>
              )}
            </div>
          </div>
        </form>

        {/* Footer signature */}
        <div className="text-center mt-12">
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "rgba(201,169,110,0.2)" }}
          >
            Mulheres antes de tudo
          </p>
        </div>
      </div>
    </section>
  );
}
