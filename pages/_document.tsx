import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        {/* <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
        <body className="overflow-x-hidden font-[poppins]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
