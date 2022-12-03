import { Html, Head, Main, NextScript } from "next/document";
import { GOOGLE_TAG_MANAGER_ID } from "../libs/googleTagManager";
const Document = () => (
  <Html>
    <Head />
    <body>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
          height="0"
          width="0"
          title="googleTagManagerNoScript"
          style={{
            display: "none",
            visibility: "hidden",
          }}
        />
      </noscript>
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default Document;
