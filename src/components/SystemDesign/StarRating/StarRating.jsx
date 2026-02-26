import React,{ useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null); // 👈 IMPORTANT (null, not 0)

  const getValue = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const x = clientX - rect.left;
    return x < rect.width / 2 ? index - 0.5 : index;
  };

  const handleMove = (e, index) => {
    setHover(getValue(e, index));
  };

  const handleClick = (e, index) => {
    setRating(getValue(e, index));
  };

  const handleLeave = () => {
    setHover(null); // 👈 reset properly
  };

  return (
    <div
      style={{ display: "flex", gap: "8px" }}    //This is the row container //Holds all stars
      onMouseLeave={handleLeave}
    >
      {[...Array(totalStars)].map((_, i) => {
        const index = i + 1;

        // 👇 KEY FIX: proper priority
        const currentValue = hover !== null ? hover : rating;

        const isFull = currentValue >= index;
        const isHalf = currentValue === index - 0.5;

        // 👇 COLORS (clearly separated)
        const fillColor =
          hover !== null ? "#00bcd4" : "#f5c518"; // cyan hover, gold selected

        return (
          <div        //Star Wrapper <div> (Each Star)
            key={index}
            onMouseMove={(e) => handleMove(e, index)}
            onClick={(e) => handleClick(e, index)}
            onTouchMove={(e) => handleMove(e, index)}
            onTouchStart={(e) => handleClick(e, index)}
            style={{
              cursor: "pointer",
              fontSize: "60px",
            }}
          >
            <span style={{ position: "relative", display: "inline-block" }}>
              {/* Base gray star */}
              <span style={{ color: "#ccc" }}>★</span>

              {/* Fill (half or full) */}
              {(isFull || isHalf) && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: isHalf ? "50%" : "100%",
                    overflow: "hidden",
                    color: fillColor,
                  }}
                >
                  ★
                </span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;


 //It acts like a frame to stack stars on top of each other.
//  📦 (this span)
//  ├── gray star
//  └── colored star (on top)