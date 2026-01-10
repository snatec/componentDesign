import { useState } from "react";

function useLocalStorageCounter(key) {
  const [count, setCount] = useState(localStorage.getItem(key) || 0);

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);
    localStorage.setItem(key, newValue);
  };

  return [count, handleIncrement];
}

export default useLocalStorageCounter;