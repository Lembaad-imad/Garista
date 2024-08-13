import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Carouselimages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        "/images/P1.svg",
        "/images/P2.svg",
        "/images/P3.svg",
    ];

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
        <div id="default-carousel" className="flex flex-col w-11/12 items-center gap-1">
            <div
                {...handlers}
                className="relative w-full h-48 rounded-xl bg-red-400 overflow-hidden"
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="w-screen h-full object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>

            <div className="space-x-3 mt-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-red-500' : 'bg-orange-400'}`}
                        aria-current={index === currentIndex ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                        data-carousel-slide-to={index}
                        style={index === currentIndex ? { outline: '2px solid #ef4444', outlineOffset: '2px' } : {}}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carouselimages;
