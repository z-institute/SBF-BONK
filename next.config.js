/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENABLE_TESTNETS: "true", // 新增環境變數
    googleAnalyticsID: "4330083285"
  },
  i18n: {
    defaultLocale: 'zh',
    locales: [ 'zh', 'en']
  }
};

module.exports = nextConfig;
