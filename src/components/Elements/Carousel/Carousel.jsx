import { useState, useEffect } from "react";
import Icon from "../Icon/Icon";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Vinoti Living 1",
      subtitle: "Made with love",
      description: "Free Pickup and Delivery Available",
      image: "/hero/gambar1.jpg",
    },
    {
      title: "Vinoti Living 2",
      subtitle: "Made with love",
      description: "Free Pickup and Delivery Available",
      image: "/hero/gambar2.jpg",
    },
    {
      title: "Vinoti Living 3",
      subtitle: "Made with love",
      description: "Free Pickup and Delivery Available",
      image: "/hero/gambar3.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval); // Clear interval when component unmounts
  }, []);

  return (
    <div className="relative">
      {/* Carousel Slides */}
      <div className="relative overflow-hidden w-full h-[400px]">
        {" "}
        {/* Set height for the carousel */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="w-full h-full object-cover"
            />
            {/* Text Content Positioned at the Bottom Center */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10 bg-black bg-opacity-50 p-4 rounded-md text-white">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <h3 className="text-xl mt-2">{slide.subtitle}</h3>
              <p className="mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white h-10 w-10 p-2 ml-2 rounded-full"
        onClick={prevSlide}
      >
        <Icon iconClass="fas fa-chevron-left" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white h-10 w-10 p-2 mr-2 rounded-full"
        onClick={nextSlide}
      >
        <Icon iconClass="fas fa-chevron-right" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-gray-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
