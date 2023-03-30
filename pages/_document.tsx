import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="overflow-x-hidden font-[poppins]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
