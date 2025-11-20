import React, {useState} from 'react';
import './OtpInput.css';

const OtpInput = () => {

    const OTP_DIGIT_COUNT = 5;
    // const inputArr = [1,2,3,4,5];

    const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill('')); //if [], nothing renders intially

    const handleOnChange = (value,index) => {
       
    }
    return (
        <div className='container'>
          <h1>Validation OTP</h1>
          {inputArr.map((item,index)=> (
            <input 
                className='otp-input' 
                key={index}
                type='number'
                value={inputArr[index]}
                onChange= {(e)=> handleOnChange(e.target.value, index)}
            />
        ))}
        </div>
    )
}

export default OtpInput