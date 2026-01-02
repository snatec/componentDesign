import React, { useState, useEffect, useRef } from "react";

export default function ROtp() {
    const otpDigits= 5;
    const[inputArr, setInputArr] = useState(new Array(otpDigits).fill(' '));

    const inputArrRef = useRef([]);

    useEffect(()=> {
        inputArrRef && inputArrRef.current[0].focus();
    },[])
    
    const handleOnChange = (value,index) => {
        if(isNaN(value)) return;
        
        const newValue = value.trim();
        const newArr = [...inputArr];
        newArr[index] = newValue.slice(-1);
        setInputArr(newArr);
        if(newValue  && index < otpDigits-1)
        inputArrRef.current[index + 1].focus();
    }

    const handleKeyDown = (e, index) => {
         if(e.key == 'Backspace' && !e.target.value){
              const newArr = [...inputArr];
              newArr[index] = '';
             setInputArr(newArr);
             if(index > 0 && !e.target.value)
              inputArrRef.current[index - 1].focus();
         }
    }
    return(
        <div>
            <h1>Otp Input</h1>
            {inputArr.map((item,index) => 
            (<input
                 className='otp-input' 
                 value={inputArr[index]}
                 onChange= {(e)=> handleOnChange(e.target.value, index)}
                 ref = {input => inputArrRef.current[index] = input}
                  onKeyDown={(e)=> handleKeyDown(e,index)}
                />)
            )}
        </div>
    )
}