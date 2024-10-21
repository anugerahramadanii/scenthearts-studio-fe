import Dropdown from "../Elements/Dropdown/Dropdown";

const SidebarSection = () => {
  const items = [
    "Rings",
    "Earrings",
    "Necklaces",
    "Pendants",
    "Bracelets",
    "Bangles",
    "Chains",
    "Pins",
    "Anklets",
  ];
  const isMobile = window.innerWidth <= 768; // Check screen width for mobile
  return (
    <div>
      <Dropdown
        label="All Categories"
        variants="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 font-bold"
        variantsList="px-6"
        isMobile={isMobile}
        items={items}
      />
    </div>
  );
};

export default SidebarSection;
