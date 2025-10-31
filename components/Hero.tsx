"use client";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HoverShadowButton from "./nurui/shadow-button";

const slides = [
  {
    id: 1,
    offer: "Exclusive Deal 40% Off",
    title: "Power Meets Elegance – Apple MacBook Pro is Here for you!",
    image: "/assets/header_macbook_image.png", // <-- remove /public
    btn1: <HoverShadowButton text="Order Now" />,
    btn2: "Learn More",
  },
  {
    id: 2,
    offer: "Special Offer 25% Off",
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    image: "/assets/playstation_image.png",
    btn1: <HoverShadowButton text="Shop Now" />,
    btn2: "Explore",
  },
  {
    id: 3,
    offer: "Mega Sale 30% Off",
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!!",
    image: "/assets/header_headphone_image.png",
    btn1: <HoverShadowButton text="Bye Now" />,
    btn2: "Discover",
  },
];


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    speed: 800,
  };

  return (
    <div className="bg-[#E9EDF5] py-16 w-[92%] mx-auto mt-5 rounded-3xl">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="outline-none pb-3">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
              {/* Text Section */}
              <div className="text-left max-w-xl">
                <p className="text-orange-600 font-medium mb-3">{slide.offer}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-[1.1] mb-6">
                  {slide.title}
                </h1>
                <div className="flex gap-4">
                  <button className=" font-semibold px-6 py-3 rounded-full">
                    {slide.btn1}
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 font-medium">
                    {slide.btn2} <span>→</span>
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="mt-8 md:mt-0 mr-72">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={300}
                  height={200}
                  className="object-contain drop-shadow-2xl"
                  priority={slide.id === 1}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;