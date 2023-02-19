import { Navbar, Footer, Announcement } from "../components/";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Announcement
        title="To The Better Self"
        description="Join and discuss online workshop about self-awareness 29/1/2023"
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
