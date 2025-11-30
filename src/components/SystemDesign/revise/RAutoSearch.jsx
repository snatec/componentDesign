import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [originalData, setOriginalData] = useState([]); // store full fetched list
  const [data, setData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  // Fetch only once
    const fetchData = async () => {
      const res = await fetch(
        `https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON`
      );
      const json = await res.json();
      setOriginalData(json);
      setData(json); // initial list
    };

 useEffect(() => {
       fetchData();
 },[]);
    
  // Subsequence logic
  const subsequentMatch = (str, query) => {
    str = str.toLowerCase();
    query = query.toLowerCase();

    let i = 0,
      j = 0;

    while (i < str.length && j < query.length) {
      if (str[i] === query[j]) j++;
      i++;
    }
    return j === query.length;
  };

  // Filter results whenever input changes
  useEffect(() => {
    if (input.trim() === "") {
      setData(originalData);
      return;
    }
      
// 🔥 substring match logic and subsequent string matching
    const filtered = originalData.filter(
      (item) =>
        item.Title.toLowerCase().includes(input.toLowerCase()) ||
        subsequentMatch(item.Title, input)
    );

    setData(filtered);
  }, [input, originalData]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }

    if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => (prev <= 0 ? data.length - 1 : prev - 1));
    }

    if (e.key === "Enter" && highlightIndex >= 0 && highlightIndex < data.length) {
      setInput(data[highlightIndex].Title);
      setShowResult(false);
    }
  };

  return (
    <div>
      <h1>AUTO SEARCH COMPONENT</h1>
      <input
        type="text"
        placeholder="Search movie"
        className="input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setHighlightIndex(-1);
        }}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
        onKeyDown={handleKeyDown}
      />

      {showResult && (
        <div className="dropDown">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={index === highlightIndex ? "active" : ""}
              onMouseDown={() => {
                setInput(item.Title);
                setShowResult(false);
              }}
            >
              {item.Title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}