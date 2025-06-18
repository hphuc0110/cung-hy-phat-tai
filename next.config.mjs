/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com', // Ví dụ: thay thế bằng hostname của bạn
        port: '',
        pathname: '/my-bucket/**', // Ví dụ: thay thế bằng pathname của bạn
      },
      {
        protocol: 'https',
        hostname: 'blob.v0.dev', // Thêm hostname của Vercel Blob nếu bạn sử dụng
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
