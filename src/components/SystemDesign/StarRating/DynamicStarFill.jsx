import React, { useState } from "react";
import StarIcon from "./StarIcon";

const NO_OF_STARS = 5;

const DynamicStarFill = ({ rating, onChange, noOfStars = NO_OF_STARS }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (index) => {
    const newRating = index + 1 === rating ? 0 : index + 1;
    onChange(newRating);
  };

  return (
    <div className="star-rating" style={{ display: "flex", gap: "5px" }}>
      {[...Array(noOfStars)].map((_, index) => {
        let fillLevel = 0;

        if (hoveredIndex !== null) {
          fillLevel = index <= hoveredIndex ? 1 : 0;
        } else {
          if (index + 1 <= Math.floor(rating)) {
            fillLevel = 1;
          } else if (index < rating) {
            fillLevel = rating - Math.floor(rating); // e.g., 0.5
          }
        }

        return (
          <button
            key={index}
            className="each-star"
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-checked={rating === index + 1}
            role="radio"
          >
            <StarIcon fill={fillLevel} id={index}/>
          </button>
        );
      })}
    </div>
  );
};

export default DynamicStarFill;
