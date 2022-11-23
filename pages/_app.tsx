import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, Global } from "@mantine/core";
import { MainLayout } from "../layouts";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      disable: "mobile",
    });
  }, []);
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

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          components: {},
          /** Put your mantine theme override here */
          colorScheme: "light",
          fontFamily: "'Inter', sans-serif;",
        }}
      >
        <Global
          styles={(theme) => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
              margin: 0,
              padding: 0,
              scrollBehavior: "smooth",
            },
            body: {
              ...theme.fn.fontStyles(),
              width: "100vw",
              minHeight: "100vh",
              overflowX: "hidden",
              // background:
              //   "radial-gradient(at top left, #66ffb4, white) no-repeat",
              // background:
              //   "radial-gradient(at top left, #cafffd, white) no-repeat",
              // background: "radial-gradient(at top left, red, blue) no-repeat",
            },
          })}
        />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </>
  );
}

export default MyApp;
