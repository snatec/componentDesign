import './Accordion.css'; // Assuming you have some styles for this component
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const Accordion = ({items}) => {
  
    const [openIndex,setOpenIndex] = useState(null);

    const handleContentView = (index) => {
        setOpenIndex(openIndex == index ? null : index);
    }
    return (
        !items || items.length == 0 ? "No items available" : 
        <div className='accordion'>
          {items.map((item, index)=> {return (
            <div key={index} className='accordion-item'>
                <div className='accordion-title' onClick={()=>handleContentView(index)}>
                    {item.title}
                    {openIndex == index ? <FaChevronUp className='right'/> : <FaChevronDown className='right'/>}
                </div>
                {openIndex == index && <div className='accordion-content'>{item.content}</div>}
            </div>
        )})}
        </div>
    )
}

export default Accordion