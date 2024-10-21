import FooterSection from "../Fragments/Footer";
import HeaderSection from "../Fragments/Header";
import NavbarSection from "../Fragments/Navbar";

const SharedLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <NavbarSection />
      <div className="container mx-auto my-8 px-2 lg:px-10">{children}</div>
      <FooterSection />
    </div>
  );
};

export default SharedLayout;
