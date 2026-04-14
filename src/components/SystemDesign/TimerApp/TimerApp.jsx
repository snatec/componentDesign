import React, { useState, useEffect, useRef } from "react";

export default function TimerApp() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start timer
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  // Pause timer
  const handlePause = () => {
    setIsRunning(false);
  };

  // Reset timer
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      // prevent multiple intervals
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    // cleanup function (VERY IMPORTANT)
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  // format time (mm:ss)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{formatTime(time)}</h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause} style={{ marginLeft: "10px" }}>
        Pause
      </button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}