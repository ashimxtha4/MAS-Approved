// add bootstrap css
import "bootstrap/dist/css/bootstrap.css"; //Import Bootstrap CSS
import "../styles/globals.css";
import "../styles/main.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
