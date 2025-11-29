import React, { useState } from 'react';

const RInputChip = () => {
    const[input,setInput] = useState(null);
    const[list,setList] = useState([]);

    const handleKeyDown = (e) => {
        if(e.key == 'Enter' && input !== ''){
             setList((prev) => [...prev, input]);
            setInput("");
        }
        // Remove last chip on Backspace when input is empty
        if (e.key === 'Backspace' && input === '' && list.length > 0) {
            setList(prev => prev.slice(0, prev.length - 1));
        }
    }
    
    const handleRemoveChip = (index) => {
        const newList = list.filter((_,id) => id !== index);
        setList(newList);
    }

    return (
        <div>
            <input 
            type='text' 
            value={input} 
            onChange={(e)=> setInput(e.target.value)}
            onKeyDown={(e)=> handleKeyDown(e)}
            aria-label = 'input chip field'
            />
            {list && list.length>0 && list.map((item,index)=> (
               <div key = {index} className='chip' role='list'>
                <label>{item}</label>
                <button style={{color:'red'}} 
                onClick={() => handleRemoveChip(index)}
                aria-label = {`remove ${item}`}
                >
                    x
                </button>
            </div>
            ))
            }
        </div>
    )
}

export default RInputChip;