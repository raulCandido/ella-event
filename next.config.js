/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  // next/image não tem suporte em export estático sem loader customizado
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
