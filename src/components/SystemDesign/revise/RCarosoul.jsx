import React, {useState, useEffect, useRef} from 'react';
import data from '../Carousel/data.json';

export default function RCarosoul() {

    const [index,setIndex] = useState(0);
    const totalSlides = data.length;

    const intervalRef = useRef(null);
    
    useEffect(()=> {
        startAutoScroll(); // start on mount
        return ()=> {
            pauseAutoScroll();
        }
    },[]);

    const startAutoScroll = () => {
        // clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
           setIndex(prevIndex => prevIndex == totalSlides-1 ? 0 : prevIndex+1);
        },2000)
    }

    const pauseAutoScroll = () => {
        clearInterval(intervalRef.current);
    }

    const handlePrev = () => {
        pauseAutoScroll();
        setIndex((prev) => (prev == 0 ? totalSlides -1 : prev -1));
        startAutoScroll(); // reset timer
    }

    const handleNext = () => {
        pauseAutoScroll();
        setIndex(prev => (prev ==   totalSlides -1 ? 0 : prev + 1));
        startAutoScroll(); // reset timer
    }

    const gotToSlide = (slideindex) => {
        setIndex(slideindex);
        startAutoScroll(); // reset timer
    }
return(
    <div>
    <h1>Carosol</h1>
     <div
         className='carosoul-container'
         onMouseEnter= {()=> pauseAutoScroll()}
         onMouseLeave={() => startAutoScroll()}
         >
         <button onClick={()=> handlePrev()}>Prev</button>
         { data && data[index] ? 
           <img src= {data[index].download_url} width ={300}/> :
             <div>No data</div>
        }
           <button onClick={()=> handleNext()}>Next</button>
     </div>
     <div>{index+1}/{totalSlides}</div>
      <div className='dot-container'>
          {data.map((_,dotIndex) => 
        (<span
             key={dotIndex} 
             className={` dot ${dotIndex == index ? 'active' : '' }`}
             onClick={()=> gotToSlide(dotIndex)}
             >
        </span>))}
      </div>
    </div>
)
}

// Without useRef issues:
// interval gets reset on every render
// React function components don’t preserve local variables

// useRef persists between renders
// .current holds the same value always
// Perfect for mutable values like timers