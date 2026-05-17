/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Em GitHub Pages o site fica em /ella-event (nome do repositório).
  // Para domínio customizado, remova basePath e trailingSlash.
  basePath: "/ella-event",
  trailingSlash: true,

  // next/image não tem suporte em export estático sem loader customizado
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
