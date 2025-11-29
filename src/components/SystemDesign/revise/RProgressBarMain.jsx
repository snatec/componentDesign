import React, {useEffect, useState} from 'react';
import './RProgressBar.css';

const  RProgressBarMain = () =>{

 const bars= [5,10,30,50,70,90,100,0];

    return(
        <div>
            <h1>ProgressBar</h1>
            {bars.map((item,index)=> (<RProgressBar data={item} key={index}/>))}
        </div>
    )
}

export default RProgressBarMain;

const RProgressBar = ({data}) => {

    const[animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(()=> {
        const progressAnimation = setTimeout(()=> setAnimatedProgress(data),100);

        return ()=> {
            clearTimeout(progressAnimation);
        }
    },[data])

    return(
        <div className='outerContainer'>
            <div className='innerContainer'
             style={{
                // width: `${data}%`,
                color: data == 0 ? 'black' : 'white',
               transform: `translateX(${animatedProgress-100}%)` //if 5% then its -95% //how much has to be hidden
            }}
            aria-valuenow = {data}
            aria-valuemax={100}
            aria-valuemin={0}
            >{data}%</div>
        </div>
    )
}

// Container (visible)
// |-------------------------|

// Full bar (hidden off-screen to LEFT)
// ████████████████████████████████
// To hide it fully, we move it LEFT by -100%:

// translateX(-100%)

// So why does it LOOK like it's moving left → right?

// Because the visible part grows from the left edge of the container.

// But what's actually happening is:

// The bar is fixed width (100%)

// You are sliding it rightward by making the translate less negative.


// If you used:

// translateX(5%)


// The bar would do this:

// |Container|
//         ████████████████████████████ → keeps going RIGHT → OUT of boundary ❌