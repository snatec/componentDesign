import React, {useState} from 'react';
import './StarRating.css';
import StarRating from './StarRating';
import DynamicStarFill from './DynamicStarFill';

const StarRatingCall = () => {

    const [rating, setRating] = useState(3);
    const [dynamicRating, setDynamicRating] = useState(3.3);

    return(
        <div className='container'>
            <StarRating rating={rating} onChange={setRating}/>
            <DynamicStarFill rating={dynamicRating} onChange={setDynamicRating}/>
       </div>
    )
}

export default StarRatingCall;