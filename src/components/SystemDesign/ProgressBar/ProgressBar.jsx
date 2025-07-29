import React, { useEffect, useState } from 'react';
import './ProgressBar.css'; // Assuming you have some styles for this component

const ProgressBar = ({progress}) => {

    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        setTimeout(()=> setAnimatedProgress(progress), 100)
    },[progress])
    return (
        <div className='container'>
        <div className='outer'>
            <div className='inner' 
                style={{
                    // width: `${animatedProgress}%`,  // to optimize  and give smooth we use transform
                    // transform: `translateX(-${100-progress}%)`,  //also correct
                    transform: `translateX(${animatedProgress-100}%)`,//shifting green bar +x% towards right, if -x% towards left. always (100 - x)%
                    color: progress<5 ? 'black' : 'white'
                }}
                role='progressbar'
                aria-valuenow={progress}
                aria-valuemax={100}
                aria-valuemin={0}
            >
                {progress}%
            </div>
        </div>
        </div>
    )
}

export default ProgressBar