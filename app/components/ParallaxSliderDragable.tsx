// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Draggable from "react-draggable";

// const ParallaxSliderDragable = () => {
//   const slides = [
//     { id: 1, image: "/assets/images/taiwan-logo.png", title: "Amazing Slide 1" },
//     {
//       id: 2,
//       image: "https://via.placeholder.com/1920x1080?text=Slide+2",
//       title: "Wonderful Slide 2",
//     },
//     {
//       id: 3,
//       image: "https://via.placeholder.com/1920x1080?text=Slide+3",
//       title: "Incredible Slide 3",
//     },
//     {
//       id: 4,
//       image: "https://via.placeholder.com/1920x1080?text=Slide+4",
//       title: "Exciting Slide 4",
//     },
//     {
//       id: 5,
//       image: "https://via.placeholder.com/1920x1080?text=Slide+5",
//       title: "Spectacular Slide 5",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const draggableNodeRef = useRef<HTMLDivElement>(null);
//   const [slideWidth, setSlideWidth] = useState(0);

//   // Calculate slide width on mount and window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (sliderRef.current?.parentElement) {
//         setSlideWidth(sliderRef.current.parentElement.offsetWidth);
//       }
//     };

//     handleResize(); // Initial calculation
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleDragStop = (e: any, data: any) => {
//     const nearestIndex = Math.round(-data.x / slideWidth);
//     const newIndex = Math.max(0, Math.min(nearestIndex, slides.length - 1));
//     setIsTransitioning(true);
//     setCurrentIndex(newIndex);
//     setTimeout(() => setIsTransitioning(false), 300);
//   };

//   const handleDotClick = (index: number) => {
//     setIsTransitioning(true);
//     setCurrentIndex(index);
//     setTimeout(() => setIsTransitioning(false), 300);
//   };

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Draggable Slider Container */}
//       <Draggable
//         axis="x"
//         nodeRef={draggableNodeRef}
//         bounds={{ left: -(slides.length - 1) * slideWidth, right: 0 }}
//         onStop={handleDragStop}
//         position={{ x: -currentIndex * slideWidth, y: 0 }}
//       >
//         <div
//           ref={draggableNodeRef}
//           className={`flex w-full h-full ${
//             isTransitioning ? "transition-transform duration-300" : ""
//           }`}
//         >
//           {slides.map((slide) => (
//             <div
//               key={slide.id}
//               ref={sliderRef}
//               className="w-full h-full flex-shrink-0 bg-no-repeat"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "contain",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
//                 {/* {slide.title} */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Draggable>

//       {/* Dot Navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               currentIndex === index ? "bg-gray-600" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ParallaxSliderDragable;

"use client";

import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const ParallaxSliderDragable = () => {
  const slides = [
    { id: 1, image: "/assets/images/taiwan-logo.png", title: "Amazing Slide 1" },
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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const draggableNodeRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Calculate slide width on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current?.parentElement) {
        setSlideWidth(sliderRef.current.parentElement.offsetWidth);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Automatically change slides every 5 seconds if no manual interaction
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isInteracting) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300); // Ensure transition duration matches the CSS animation
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isInteracting, slides.length]); // Add slides.length as a dependency

  const handleDragStop = (e: any, data: any) => {
    const nearestIndex = Math.round(-data.x / slideWidth);
    const newIndex = Math.max(0, Math.min(nearestIndex, slides.length - 1));
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setIsInteracting(true); // Set to true to prevent auto sliding during interaction
    setTimeout(() => {
      setIsTransitioning(false);
      setIsInteracting(false); // Reset interaction state after drag
    }, 300);
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    setIsInteracting(true); // Set to true to prevent auto sliding during interaction
    setTimeout(() => {
      setIsTransitioning(false);
      setIsInteracting(false); // Reset interaction state after click
    }, 300);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Draggable Slider Container */}
      <Draggable
        axis="x"
        nodeRef={draggableNodeRef}
        bounds={{ left: -(slides.length - 1) * slideWidth, right: 0 }}
        onStop={handleDragStop}
        position={{ x: -currentIndex * slideWidth, y: 0 }}
      >
        <div
          ref={draggableNodeRef}
          className={`flex w-full h-full ${isTransitioning ? "transition-transform duration-300" : ""}`}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              ref={sliderRef}
              className="w-full h-full flex-shrink-0 bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                {/* {slide.title} */}
              </div>
            </div>
          ))}
        </div>
      </Draggable>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-gray-600" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxSliderDragable;


