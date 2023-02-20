import { Navbar, Footer, Announcement } from "../components/";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
