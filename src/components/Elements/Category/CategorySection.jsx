import React from "react";
import Slider from "react-slick";

const CategorySection = () => {
  const products = [
    {
      image: "https://placehold.co/300x300?text=Dried+Fruit",
      alt: "A packet of dried fruit and nuts",
      title: "DRIED FRUIT",
    },
    {
      image: "https://placehold.co/300x300?text=Vegetables",
      alt: "A variety of fresh vegetables spilling out of a paper bag",
      title: "VEGETABLES",
    },
    {
      image: "https://placehold.co/300x300?text=Drink+Fruits",
      alt: "A carton of mixed fruit juice",
      title: "DRINK FRUITS A",
    },
    {
      image: "https://placehold.co/300x300?text=Drink+Fruits",
      alt: "A pile of red meat cubes",
      title: "DRINK FRUITS B",
    },
    {
      image: "https://placehold.co/300x300?text=Drink+Fruits",
      alt: "A pile of red meat cubes",
      title: "DRINK FRUITS C",
    },
    {
      image: "https://placehold.co/300x300?text=Drink+Fruits",
      alt: "A pile of red meat cubes",
      title: "DRINK FRUITS D",
    },
  ];

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "gray",
          borderRadius: "50%",
          justifyContent: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true, // Stop on hover
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-4">Category Products</h2>
      <div className="w-full mx-auto px-4">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow hover:scale-110 transition-all"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full object-cover mb-4"
              />
              <div className="text-lg font-bold text-center">
                {product.title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CategorySection;
