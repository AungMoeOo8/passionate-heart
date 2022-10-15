import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, Global } from "@mantine/core";
import { MainLayout } from "../layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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
              minHeight: "100vh",
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
