import { useEffect, useState } from "react";

const PAGE_SIZE = 5;

export default function App() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [inputvalue, setInputValue] = useState('');

     const fetchData = async() => {
        const data = await fetch('https://dummyjson.com/recipes');
        const json = await data.json();
    
        setData(json && json.recipes);
        setFilteredData(json && json.recipes);
      }

      useEffect(() => {
            fetchData();  //call once
      }, []);

    
 return(
    <div style={{ width: "600px", margin: "auto" }}>
      <h2>Recipe Table</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by Name..."
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "6px", marginBottom: "12px", width: "100%" }}
      />
    </div>
 )
}
