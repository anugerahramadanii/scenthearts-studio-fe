import Carousel from "../Elements/Carousel/Carousel";
import Dropdown from "../Elements/Dropdown/Dropdown";
import InputGroup from "../Elements/Input/index-input-group";

const HeroSection = () => {
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
  return (
    <>
      <div className="container flex flex-wrap justify-end mx-auto">
        <InputGroup
          inputType="text"
          buttonType="submit"
          placeholder="What do you need?"
          inputName="search"
          inputVariants="w-full mr-20 py-3 px-6"
          buttonName="SEARCH"
          buttonVariants="bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 text-sm md:text-base py-6 flex justify-center items-center"
        />
      </div>
      <Carousel />
    </>
  );
};

export default HeroSection;
