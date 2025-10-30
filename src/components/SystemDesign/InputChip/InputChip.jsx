import React, { useState } from 'react';

const InputChip = () => {

    const[input,setInput] = useState("");
    const[chips,setChips] = useState([]);

    const handleKeyDown = (e) => {
       if(e.key == 'Enter' && input !== ""){
        // add chips
         setChips(prev => [...prev, input]);
         setInput("");
       }
    }

    const handleRemoveChip = (index) => {
        const copyChipsArray = [...chips];
        copyChipsArray.splice(index,1);
        setChips(copyChipsArray);
    }
    return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        onKeyDown={(e)=> handleKeyDown(e)} //since keyPress event is deprecated
      />
      <div>
        {chips.map((item,index) => (
        <div style={{background: 'grey', padding: '10px', color: 'white', marginTop: '10px'}}>
            {item}
            <button style={{color:'red'}} onClick={() => handleRemoveChip(index)}>x</button>
        </div>))}
      </div>
    </div>
  );
}

export default InputChip;