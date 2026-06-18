import React, { useState, useEffect } from "react";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/JAN_ART26/MAY26_PC_Static_Sale-is-live_Prime_2x._CB780750326_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/MayART26/WD/LiveNow/SA_GW_1x._CB781110488_.jpg",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="group relative mx-auto w-full max-w-[1500px]">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="
          absolute left-0 top-0 z-20
          h-[250px] w-20
          flex items-center justify-center
          text-transparent
          group-hover:text-gray-700
          text-5xl
          transition-all
          hover:outline hover:outline-2 hover:outline-white
          focus:border-2 focus:border-[#febd69]
        "
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="
          absolute right-0 top-0 z-20
          h-[250px] w-20
          flex items-center justify-center
          text-transparent
          group-hover:text-gray-700
          text-5xl
          transition-all
          hover:outline hover:outline-2 hover:outline-white
          focus:border-2 focus:border-[#febd69]
        "
      >
        ❯
      </button>

      {/* Image Container */}
      <div className="relative overflow-hidden pb-[40%]">
        {/* Track */}
        <div
          className="absolute left-0 top-0 flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Banner ${index + 1}`}
              className="h-full w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Amazon Fade Effect */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-b
            from-transparent
            via-transparent
            to-[#e3e6e6]
          "
        />
      </div>
    </section>
  );
}
export default HeroSlider;