"use client";

import React, { useState, useEffect, useRef } from "react";

const ParallaxSlider = () => {
  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/1920x1080?text=Slide+1",
      title: "Amazing Slide 1",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/1920x1080?text=Slide+2",
      title: "Wonderful Slide 2",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/1920x1080?text=Slide+3",
      title: "Incredible Slide 3",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/1920x1080?text=Slide+4",
      title: "Exciting Slide 4",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/1920x1080?text=Slide+5",
      title: "Spectacular Slide 5",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/1920x1080?text=Slide+6",
      title: "Breathtaking Slide 6",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/1920x1080?text=Slide+7",
      title: "Stunning Slide 7",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/1920x1080?text=Slide+8",
      title: "Majestic Slide 8",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/1920x1080?text=Slide+9",
      title: "Fabulous Slide 9",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/1920x1080?text=Slide+10",
      title: "Marvelous Slide 10",
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 (virtual first slide)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // Adjust for virtual slides
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      // Handle "infinite" loop logic
      if (currentIndex === slides.length + 1) {
        slider.style.transition = "none"; // Disable transition
        setCurrentIndex(1); // Reset to first slide (virtual copy)
        slider.style.transform = `translateX(-100%)`;
      } else if (currentIndex === 0) {
        slider.style.transition = "none"; // Disable transition
        setCurrentIndex(slides.length); // Reset to last slide (virtual copy)
        slider.style.transform = `translateX(-${slides.length * 100}%)`;
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, slides.length]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    slider.style.transition = "transform 0.7s ease";
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slider Container */}
      <div ref={sliderRef} className="flex w-full h-full">
        {/* Clone Last Slide */}
        <div
          className="w-full flex-shrink-0"
          style={{
            backgroundImage: `url(${slides[slides.length - 1].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-4xl font-bold">
            {slides[slides.length - 1].title}
          </div>
        </div>

        {/* Original Slides */}
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-4xl font-bold">
              {slide.title}
            </div>
          </div>
        ))}

        {/* Clone First Slide */}
        <div
          className="w-full flex-shrink-0"
          style={{
            backgroundImage: `url(${slides[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-4xl font-bold">
            {slides[0].title}
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index + 1
                ? "w-2 h-2 bg-white"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxSlider;
