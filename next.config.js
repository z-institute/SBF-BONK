/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENABLE_TESTNETS: "true", // 新增環境變數
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: ["G-0JD61VES6C", "GT-M632DZ2"],
    googleAnalyticsID: "250891534",
    GOOGLE_CLIENT_EMAIL: "cyberbonk@cyberbonk2022.iam.gserviceaccount.com" ,
    ALCHEMY_API_KEY: "N_DSz9U7PicrZ__icQDUtV9wkokOlv6G"
  },
  i18n: {
    defaultLocale: 'zh',
    locales: [ 'zh', 'en']
  }
};

module.exports = nextConfig;
