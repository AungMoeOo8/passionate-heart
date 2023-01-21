import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MainLayout } from "../layouts";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   Aos.init({
  //     disable: "mobile",
  //   });
  // }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link href="https://passionateheartmyanmar.com" rel="canonical" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
