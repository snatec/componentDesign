import React, {useState} from 'react';
import './RAccordian.css';

const RAccordian = ({data}) =>{

    const[openIndex,setOpenIndex] = useState(null);

    const handleIndex= (index) => {
      setOpenIndex(openIndex == index ? null : index);
    }
    
    return(
        <div>
            {data.map((item, index)=> (
                <div key={index}>
                    <div className='titleHead'>
                        <div className='title'>{item.title}</div>
                        <div onClick={()=> handleIndex(index)}>{openIndex == index ? 'down' : 'Up'}</div>
                    </div>
                  
                     {openIndex == index && <div className='subtitle'>{item.content}</div>}
                    
                </div>
            ))}
        </div>
    )
}

export default RAccordian;