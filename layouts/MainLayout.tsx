import { Navbar, Footer } from "../components/";

export default function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
