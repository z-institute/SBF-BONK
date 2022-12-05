/* eslint-disable @next/next/inline-script-id */
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import {
  RainbowKitProvider,
  getDefaultWallets,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlProvider } from "next-intl";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [chain.goerli]
      : []),
  ],

  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: "nFhcdHOC99lvjN-yWR2q_hgO2WcDuV3W",
    }),
    // publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps, router }: any) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          modalSize="compact"
          theme={lightTheme({
            accentColor: "#169bb4",
          })}
        >
          <NextIntlProvider messages={pageProps.messages}>
            <Head>
              <link rel="icon" type="image/jpg" href="/favicon.ico" />
              <meta
                name="google-site-verification"
                content="G65CewReM3XHzCT__NPcpX9o6xAe27y-vNbivUq6ayQ"
              />
            </Head>
            {/* Google Tag Manager */}
            <Script>
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});`}
              {`var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';`}
              {`j.async=true;`}
              {`j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);`}
              {`})(window,document,'script','dataLayer','GTM-T97WGQH');`}
            </Script>
            {/* End Google Tag Manager */}
            {/* Google tag (gtag.js) */}
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-0JD61VES6C"
              strategy="lazyOnload"
            />
            <Script id="count-view">
              {`window.dataLayer = window.dataLayer || [];`}
              {`function gtag(){dataLayer.push(arguments)};`}
              {`gtag('js', new Date());`}
              {`gtag('config', 'G-0JD61VES6C');`}
            </Script>
            <Component {...pageProps}>
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-T97WGQH"
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
                ></iframe>
              </noscript>
            </Component>
            <Script src="https://apis.google.com/js/api.js" />
            {/* <Script src="/javascripts/screenPageViews.js" /> */}
          </NextIntlProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
