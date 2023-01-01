import Image from "next/image";
import Head from "next/head";

export default function Academy() {
  return (
    <>
      <Head>
        <title>Passionate Heart | Academy</title>
      </Head>
      <div>
        <Image width={500} height={500} src="/images/ph-academy-logo.png" />
      </div>
    </>
  );
}
