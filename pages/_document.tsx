import { createGetInitialProps } from "@mantine/next";
import Document, { Html, Head, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html>
        <Head />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
