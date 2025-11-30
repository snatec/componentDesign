import React, {useState, useEffect, useRef} from 'react';
import './RCarosoul.css';
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
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
           setIndex(prevIndex => prevIndex == totalSlides-1 ? 0 : prevIndex+1);
        },2000)
    }

    const pauseAutoScroll = () => {
        clearInterval(intervalRef.current);
    }

    const handlePrev = () => {
        setIndex((prev) => (prev == 0 ? totalSlides -1 : prev -1));
        startAutoScroll(); // reset timer
    }

    const handleNext = () => {
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