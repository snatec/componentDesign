import React, {useState} from 'react';
import './StarRating.css';
import star from './star-outline.svg';
import yellowStar from './yellowStar.svg';

const NO_OF_STARS = 5;

const StarRating = ( {rating, onChange, noOfStars = NO_OF_STARS} ) => {

    const [hoveredIndex, setHoveredIndex] = useState();
   
    const handleClick = (index) => {
        if(index + 1 == rating){
            onChange(0);
        } else {
            onChange(index+1);
        }
    }
//not working handleKeyDown, have to check it
//    const handleKeyDown = (e, index) => {
//     if (e.key === 'ArrowRight' && rating < noOfStars) {
//         onChange(rating + 1);
//     }

//     if (e.key === 'ArrowLeft' && rating > 0) {
//         onChange(rating - 1);
    
//     }

//     if (e.key === 'Enter' || e.key === ' ') {
//         handleClick(index);
//     }
//     };


    return(
       <div className='star-rating'>{[...new Array(noOfStars)].map((_,index)=> {
        const isActive =  index < rating || index <= hoveredIndex;
        return (
        <button 
           key={index}
           tabIndex="0"
           className='each-star'
           onClick={()=> handleClick(index)}
           aria-checked={rating == index+1} //accessbility
           onMouseEnter={()=> setHoveredIndex(index)}
           onMouseLeave={()=> setHoveredIndex(null)}
        //    onKeyDown={(e) => handleKeyDown(e,index)}
           role="radiogroup"
        >
           {isActive ? 
           <img src={yellowStar} width={50} height={50}/> : 
           <img src= {star} width={50} height={50}/>}
        </button>
        )
       }) }</div>
    )
}

export default StarRating;