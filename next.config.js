/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENABLE_TESTNETS: "true", // 新增環境變數,
    ALCHEMY_API_KEY: "8czk7qMmodQoT68FG3UmxcsGMS67rAax",
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  },
  i18n: {
    defaultLocale: 'zh',
    locales: [ 'zh', 'en']
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};

module.exports = nextConfig;
