import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="font-[poppins] overflow-x-hidden md:overflow-y-scroll ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
