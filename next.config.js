/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENABLE_TESTNETS: "true", // 新增環境變數
  },
  i18n: {
    locales: [ 'cn', 'en'],
    defaultLocale: 'cn'
  }
};

module.exports = nextConfig;
