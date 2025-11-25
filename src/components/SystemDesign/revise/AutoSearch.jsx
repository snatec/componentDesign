import {useState,useEffect} from 'react';
export default function App() {

    const [inputValue,setInputValue] = useState(''); //current input
    const [showResult, setShowResults] = useState(false);
    const [results, setResults] = useState([]);
    const [cache, setCache] = useState({}); // input: result
    const [highlightedIndex, setHightlightedIndex] = useState(-1);
    const fetchData = async() => {

        if(cache[inputValue]) {
            setResults(cache[inputValue]);
            return;
        }
        const data = await fetch('https://dummyjson.com/recipes/search?q=' + inputValue);
        const json = await data.json();
        setResults(json && json.recipes);
        setCache( (prev) => ({...prev, [inputValue] :  json.recipes && json.recipes}))
    }

    useEffect(() => {
    const timer = setTimeout(()=> fetchData(),300);
        return () => {
            clearTimeout(timer);
        }
  },[inputValue]);

    const handleKeyDown = (e) => {
  if(results.length == 0) return;
        if(e.key == 'Enter'){
            setInputValue(results[highlightedIndex].name);
            setShowResults(false);
        }

        if(e.key == 'ArrowDown'){
            e.preventDefault();
            setHightlightedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0 ));
        }

        if(e.key == 'ArrowUp'){
            e.preventDefault();
            setHightlightedIndex(prev => (prev>0 ? prev -1 : results.length-1));
        }
    }
  return (
    <div>
          <div className='heading'>Auto search component</div>
          <input  
              className='input-box' 
              type = 'text' 
              placeholder='Start typing to search '
              value={inputValue}
              onChange={(e)=> setInputValue(e.target.value)}
              onFocus= {()=> setShowResults(true)}
              onBlur= {()=>  setShowResults(false)}
              onKeyDown= {(e)=> handleKeyDown(e)}
            />
        {showResult && inputValue.length>0 &&  <div className='resultContainer'>
            {results.length>0  ? results.map((item,index)=> 
                (<div key={index} className={index == highlightedIndex ? 'highlightedResults' : 'results' }onMouseDown={()=> setInputValue(item.name)}>{item && item.name}</div>)) :
            <div>No matches found</div>}
          </div>}
    </div>
  )
}
