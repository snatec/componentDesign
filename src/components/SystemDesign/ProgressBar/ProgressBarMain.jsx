import './ProgressBar.css'; // Assuming you have some styles for this component
import ProgressBar from './ProgressBar';

const ProgressBarMain = () => {
    const bars= [5,10,30,50,70,90,100,0];

    return (
        <div className='containerMain'>
        <div>Progress Bar</div>
        {bars.map((item,index) => (<ProgressBar key = {index} progress={item}/>))}
        </div>
    )
}

export default ProgressBarMain