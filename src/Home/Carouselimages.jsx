import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const Carouselimages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ["/images/R1.svg", "/images/R2.svg", "/images/R3.svg"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="default-carousel" className="flex flex-col w-11/12 items-center ">
      <div
        {...handlers}
        className="relative w-full h-36 rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="space-x-3 mt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-500" : "bg-orange-400"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            data-carousel-slide-to={index}
            style={
              index === currentIndex
                ? { outline: "2px solid #ef4444", outlineOffset: "2px" }
                : {}
            }
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carouselimages;
