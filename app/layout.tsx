import "./css/style.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import localFont from "next/font/local";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const nacelle = localFont({
  src: [
    { path: "../public/fonts/nacelle-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/nacelle-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/nacelle-semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/nacelle-semibolditalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Mulheres antes de tudo — Avalie o Evento",
  description:
    "Compartilhe sua experiência no evento da comunidade Mulheres antes de tudo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${jost.variable} ${nacelle.variable} antialiased`}
        style={{ backgroundColor: "#0f0a0c", color: "#e8d5c4", fontFamily: "var(--font-jost), sans-serif" }}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
