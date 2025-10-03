/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 빌드 시 ESLint 에러를 무시
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 빌드 시 TypeScript 에러를 무시 (필요한 경우)
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig