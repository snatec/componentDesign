import React from "react";
import useLocalStorageCounter from "./useLocalStorageCounter";

function Counter() {
  const [count, handleIncrement] = useLocalStorageCounter("counterValue");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
export default Counter;