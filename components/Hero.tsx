"use client";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HoverShadowButton from "./nurui/shadow-button";

// Animated Icons
const AnimatedArrow = () => (
  <motion.span
    initial={{ x: 0 }}
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="inline-block"
  >
    →
  </motion.span>
);

const FloatingIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-5, 5, -5] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
    className="inline-flex"
  >
    {children}
  </motion.div>
);

const OfferBadge = ({ text }: { text: string }) => (
  <motion.div
    initial={{ scale: 0, rotate: -10 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
    className="inline-block"
  >
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
    >
      <FloatingIcon>
        <span className="text-yellow-300">✨</span>
      </FloatingIcon>
      {text}
      <FloatingIcon delay={0.5}>
        <span className="text-yellow-300">🎯</span>
      </FloatingIcon>
    </motion.span>
  </motion.div>
);

const slides = [
  {
    id: 1,
    offer: "Exclusive Deal 40% Off",
    title: "Power Meets Elegance – Apple MacBook Pro is Here for you!",
    image: "/assets/header_macbook_image.png",
    btn1: <HoverShadowButton text="Order Now" />,
    btn2: "Learn More",
    icon: "💻",
    bgGradient: "from-blue-50 to-cyan-100",
  },
  {
    id: 2,
    offer: "Special Offer 25% Off",
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    image: "/assets/playstation_image.png",
    btn1: <HoverShadowButton text="Shop Now" />,
    btn2: "Explore",
    icon: "🎮",
    bgGradient: "from-purple-50 to-pink-100",
  },
  {
    id: 3,
    offer: "Mega Sale 30% Off",
    title: "Immerse Yourself in Sound - Premium Headphones Collection!",
    image: "/assets/header_headphone_image.png",
    btn1: <HoverShadowButton text="Buy Now" />,
    btn2: "Discover",
    icon: "🎧",
    bgGradient: "from-green-50 to-emerald-100",
  },
];

// --- Move FloatingBackground OUTSIDE Hero component ---
interface FloatingBackgroundProps {
  icon: string;
}

const FloatingBackground = ({ icon }: FloatingBackgroundProps) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 text-6xl opacity-10"
    >
      {icon}
    </motion.div>
    <motion.div
      animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-10 right-10 text-4xl opacity-10"
    >
      {icon}
    </motion.div>
  </div>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    speed: 1000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <motion.div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-orange-500 scale-125" : "bg-gray-400"
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
    ),
  };

  return (
    <div
      className={`bg-gradient-to-br ${slides[currentSlide]?.bgGradient} py-16 w-[92%] mx-auto mt-5 rounded-3xl relative overflow-hidden shadow-2xl`}
    >
      <FloatingBackground icon={slides[currentSlide]?.icon} />

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="outline-none pb-3">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10">
              {/* Text Section */}
              <div className="text-left max-w-xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <OfferBadge text={slide.offer} />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-gray-800 leading-[1.1] mb-6 mt-4"
                >
                  {slide.title}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="flex gap-4 items-center"
                >
                  {slide.btn1} {/* Directly render HoverShadowButton */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-700 font-medium bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    {slide.btn2} <AnimatedArrow />
                  </motion.button>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                className="mt-8 md:mt-0 md:mr-72 relative"
              >
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={400}
                    height={300}
                    className="object-contain drop-shadow-2xl"
                    priority={slide.id === 1}
                  />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 text-2xl"
                >
                  {slide.icon}
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 shadow-lg z-20"
      >
        <motion.span animate={{ x: [-2, 0, -2] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-2xl">
          ←
        </motion.span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 shadow-lg z-20"
      >
        <motion.span animate={{ x: [2, 0, 2] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-2xl">
          →
        </motion.span>
      </motion.button>
    </div>
  );
};

export default Hero;