import CategorySection from "../components/Elements/Category/CategorySection";
import HeroSection from "../components/Fragments/Hero";
import SidebarSection from "../components/Fragments/Sidebar";
import SharedLayout from "../components/Layouts/SharedLayout";

const LandingPage = () => {
  return (
    <SharedLayout>
      <section className="container mx-auto flex flex-col lg:flex-row px-2">
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <SidebarSection />
        </aside>
        <main className="w-full lg:w-3/4 lg:ml-8">
          <HeroSection />
        </main>
      </section>

      <section className="w-full mt-8 px-2">
        <CategorySection />
      </section>
    </SharedLayout>
  );
};

export default LandingPage;
