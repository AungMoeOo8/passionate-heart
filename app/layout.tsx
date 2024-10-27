import { Metadata } from "next";
import { Footer, Navbar } from "../components";
import "../styles/globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-libre",
});

const inter = Inter({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Passionate Heart",
    default: "Passionate Heart",
  },
  description:
    "We are passionate to offer assured, trusted, affordable counseling services, pyschological tests, and assessment services.",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width",
  metadataBase: new URL("https://passionateheartmyanmar.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    other: {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable}`}>
      <body className="font-inter overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
