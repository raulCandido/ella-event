"use client";
import { useEffect, useRef } from "react";

interface HeroProps {
  subtitle?: string;
  description?: string;
  cta?: { text: string; href: string };
}

export default function Hero({
  subtitle = "Um espaço criado para despertar o que há de mais poderoso em você",
  description = "Conexão autêntica, bem-estar e empoderamento em cada detalhe — ELLA foi pensado especialmente para você.",
  cta = { text: "Quero Participar", href: "#participar" },
}: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles: {
      x: number; y: number; r: number; dx: number; dy: number; alpha: number; color: string;
    }[] = [];
    const colors = ["#c9a96e", "#e8c98a", "#b5554a", "#6b2d3e", "#f2ddd5", "#c9a96e"];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.3,
        dx: (Math.random() - 0.5) * 0.22,
        dy: (Math.random() - 0.5) * 0.22,
        alpha: Math.random() * 0.35 + 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6 py-16"
      style={{
        background: "linear-gradient(155deg, #0f0a0c 0%, #1a1015 35%, #241820 65%, #3d1a25 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.55 }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(107,45,62,0.28) 0%, transparent 70%)",
          animation: "glow-pulse 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(181,85,74,0.06) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-sm w-full text-center hero-content">
        {/* Community badge */}
        <div
          className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full"
          style={{
            border: "1px solid rgba(201,169,110,0.2)",
            background: "rgba(201,169,110,0.05)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: "#c9a96e", boxShadow: "0 0 6px rgba(201,169,110,0.6)" }}
          />
          <span
            className="text-xs tracking-[0.22em] uppercase"
            style={{ color: "rgba(201,169,110,0.75)", fontWeight: 400 }}
          >
            Comunidade
          </span>
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: "#c9a96e", boxShadow: "0 0 6px rgba(201,169,110,0.6)" }}
          />
        </div>

        {/* Main title */}
        <h1
          className="mb-3 leading-none"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.8rem, 11vw, 5.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
            color: "#e8d5c4",
          }}
        >
          Mulheres
        </h1>
        <h1
          className="mb-8 leading-none"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.8rem, 11vw, 5.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
            background: "linear-gradient(135deg, #c9a96e 0%, #e8c98a 40%, #b5886a 70%, #e8c98a 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradient 7s linear infinite",
          }}
        >
          antes de tudo
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-9">
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.35))" }}
          />
          <span style={{ color: "rgba(201,169,110,0.4)", fontSize: "0.45rem", letterSpacing: "0.4em" }}>
            ◆◆◆
          </span>
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{ background: "linear-gradient(to left, transparent, rgba(201,169,110,0.35))" }}
          />
        </div>

        <p
          className="mb-5"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(1.25rem, 5vw, 1.7rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(232,213,196,0.82)",
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>

        <p
          className="mb-12 mx-auto"
          style={{
            fontSize: "0.875rem",
            color: "rgba(232,213,196,0.42)",
            lineHeight: 1.85,
            maxWidth: "28ch",
          }}
        >
          {description}
        </p>

        <a
          href={cta.href}
          className="btn-gold"
          style={{
            borderRadius: "3rem",
            padding: "1rem 2.4rem",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
          }}
        >
          {cta.text}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(201,169,110,0.3), transparent)" }}
        />
      </div>
    </section>
  );
}
