import React, { useEffect, useState } from 'react';
import './AutoCompleteSearch.css'; // Assuming you have some styles for this component

const AutoCompleteSearch = () => {

  const [input, setInput] = useState('');  // current input text
  const [results, setResults] = useState([]); // fetched search results
  const [showResults, setShowResults] = useState(false); // whether to show dropdown
  const [cache, setCache] = useState({}); // cache: stores input → results
  const [highlightedIndex, setHightlightedIndex] = useState(-1); // index of highlighted item for keyboard navigation

  const fetchData = async() => {

    if(cache[input]) // check if input already cached
    {
      console.log("CACHE RETURN",input);
      setResults(cache[input]);
      return;
    }
    console.log("API CALL");
     const data = await fetch('https://dummyjson.com/recipes/search?q=' + input);
     const json = await data.json();
     setResults(json?.recipes);
     setCache((prev) => ({...prev, [input] : json?.recipes}))  // cache is {input : results} // add to cache
  }

  // useEffect: run when `input` changes, debounce fetch by 300ms

  useEffect(() => {
     const timer = setTimeout(() => {fetchData()},300)
     return () => {
      clearTimeout(timer);
     }
  },[input]);

  // Handle keyboard navigation: ArrowDown, ArrowUp, Enter
  const handleKeyDown = (e) => {
     if(!showResults || results.length==0) return;

     if(e.key == 'ArrowDown') {
      e.preventDefault();
      setHightlightedIndex( (prev) => (prev < results.length -1 ? prev + 1 : 0));
     }

     if(e.key == 'ArrowUp') {
      e.preventDefault();
      setHightlightedIndex((prev) => (prev > 0 ? prev - 1 : results.length -1));
     }

     if (e.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < results.length) {
        setInput(results[highlightedIndex].name); // update input
        setShowResults(false); // close dropdown
      }
     }
  }

  return (
    <div className="searchContainer">
      <h1>AutoComplete Search Component</h1>
      <input type="text" 
       className="inputBox"
       placeholder="Start typing to search..." 
       value={input} 
       onChange={(e) => {setInput(e.target.value); setHightlightedIndex(-1)}} // reset highlight on new input
       onFocus={() => setShowResults(true)} // show dropdown on focus
       onBlur={() => setShowResults(false)} // hide dropdown on blur or while clicking on outside
       onKeyDown={handleKeyDown} // handle keyboard navigation
      />
      {showResults &&
        <div className="resultsContainer">
        {results.length>0 ? (
          results.map((item,idx) => 
            (<span 
              className={`results ${idx === highlightedIndex ? 'highlighted' : ''}`} // apply highlight style
              key={item.id}
              onMouseDown={()=> {setInput(item.name), setShowResults(false)}} // select item on click
              >
                {item.name}
            </span>)
          )) 
          : (<div>No results found</div>) // message when no matches
        }
        </div>
      }
    </div>
  );
};

export default AutoCompleteSearch;
