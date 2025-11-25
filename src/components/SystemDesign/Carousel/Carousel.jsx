import React, { useEffect, useState, useRef } from "react";
import "./Carousel.css";
import data from "./data.json";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const totalSlides = data.length;

  // Next slide
  const handleNext = () => {
    setIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Previous slide
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Jump to specific slide (dots)
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  // Auto-scroll
  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 1000);
  };

  const pauseAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll(); // start on mount
    return () => pauseAutoScroll(); // cleanup
  }, []);

  if (!data || data.length === 0) return <div>Loading...</div>;

  return (
    <div
      className="container"
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      {/* Prev Button */}
      <button className="left-button" onClick={handlePrev}>
        Prev
      </button>

      {/* Current Slide */}
      {data[index] && data[index].download_url ? (
        <img
          src={data[index].download_url}
          alt={`slide ${index}`}
          width={500}
          height={300}
        />
      ) : (
        <div>Download url not found</div>
      )}

      {/* Next Button */}
      <button className="right-button" onClick={handleNext}>
        Next
      </button>

      {/* Dot Navigation */}
      <div className="dots-container">
        {data.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${dotIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
