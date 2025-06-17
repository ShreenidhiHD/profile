/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'react-icons'],
  },
  webpack: (config) => {
    config.module = {
      ...config.module,
      exprContextCritical: false
    };
    return config;
  }
};

export default nextConfig;
