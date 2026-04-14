import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      // evaluate expression
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Calculator</h2>

      <input
        type="text"
        value={input}
        readOnly
        style={styles.display}
      />

      <div style={styles.grid}>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "=" ? handleCalculate() : handleClick(btn)
            }
            style={styles.button}
          >
            {btn}
          </button>
        ))}

        <button onClick={handleClear} style={styles.clear}>
          C
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "220px",
    margin: "50px auto",
    textAlign: "center",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
  },
  display: {
    width: "100%",
    height: "40px",
    marginBottom: "10px",
    textAlign: "right",
    fontSize: "18px",
    padding: "5px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  clear: {
    gridColumn: "span 4",
    padding: "10px",
    background: "red",
    color: "white",
    cursor: "pointer",
  },
};