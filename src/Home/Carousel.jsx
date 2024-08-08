import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        "/images/P1.svg",
        "/images/P2.svg",
        "/images/P3.svg",
    ];

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div id="default-carousel" className=" flex flex-col items-center gap-3  " >
            <>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`w-full flex flex-col items-center ${index === currentIndex ? 'block' : 'hidden'}`}
                        
                    >
                        <img src={slide} className="max-w-96 " alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </>

            <div className="space-x-3">
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

export default Carousel;
