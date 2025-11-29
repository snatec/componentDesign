import React, {useEffect, useRef, useState} from 'react';
import './OtpInput.css';

const OtpInput = () => {

    const OTP_DIGIT_COUNT = 5;
    // const inputArr = [1,2,3,4,5];

    const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill('')); //if [], nothing renders intially

    const refArr = useRef([]);

    useEffect(()=> {
        refArr.current && refArr.current[0].focus();
    },[])

    const handleOnChange = (value,index) => {

     if(isNaN(value)) return; //Nan means Not a number
     const newValue = value.trim();
       const newArray = [...inputArr];
       newArray[index] = newValue.slice(-1); //takes last input ie if you type 394 in same input box, it will take 4 only

       setInputArr(newArray);
      
    if (newValue && index < OTP_DIGIT_COUNT - 1) {
      refArr.current[index + 1].focus();
    }

    }

    const handleKeyDown = (e,index) => {
        if(!e.target.value && e.key == 'Backspace'){
           refArr.current[index - 1].focus(); //first comes focus and then deletion ie backspace happens so if we dont put !e.target.value prev value gets deleted
           // so now if input box is empty only then focus prev index and do backspace/deletion
        }
    }

    return (
        <div className='container'>
          <h1>Validation OTP</h1>
          <div className='otpBoxes'>
            {inputArr.map((item,index)=> (
                <input 
                    className='otp-input' 
                    key={index}
                    type='text'
                    value={inputArr[index]}
                    ref= {input => refArr.current[index] = input}
                    onChange= {(e)=> handleOnChange(e.target.value, index)}
                    onKeyDown={(e)=> handleKeyDown(e,index)}
                />
            ))}
        </div>
        </div>
    )
}

export default OtpInput