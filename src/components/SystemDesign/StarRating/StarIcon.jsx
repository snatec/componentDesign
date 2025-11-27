import React from "react";

const StarIcon = ({ fill = 0, id }) => {
  // Clamp fill between 0 and 1
  const fillPercent = Math.max(0, Math.min(fill, 1)) * 100;
  const clipId = `clip-${id}`; // unique clip ID per star

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      stroke="#aaa"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Empty star outline */}
      <polygon
        points="12 2 15.5 9 23 9.2 17.5 14 19.3 21 12 17 4.7 21 6.5 14 1 9.2 8.5 9"
        fill="none"
        stroke="#aaa"
        strokeWidth="2"
      />
      {/* Filled portion */}
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={`${fillPercent}%`} height="100%" />
        </clipPath>
      </defs>
      <polygon
        points="12 2 15.5 9 23 9.2 17.5 14 19.3 21 12 17 4.7 21 6.5 14 1 9.2 8.5 9"
        fill="#2ecc71"
        stroke="#2ecc71"
        strokeWidth="2"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
};

export default StarIcon;
