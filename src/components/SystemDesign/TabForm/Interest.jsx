import React from 'react';

const Interest = ({data,setData,error}) => {
    const {interest} = data;

    const handleDataChange = (e) => {
    const value = e.target.name; // name of the checkbox // [coding/music/badminton]
    const checked = e.target.checked;
 setData(prev => ({
        ...prev,
        interest: checked
            ? [...prev.interest, value]              // add
            : prev.interest.filter(item => item !== value) // remove
        }));

//     setData((prevState) => {
//       const newInterest = checked
//         ? [...prevState.interest, value] // add
//         : prevState.interest.filter((item) => item !== value); // remove // array.filter(callback) // Include the item in the new array only if it is NOT equal (!==) to value.
// // suppose item is coding and user has unchecked coding "coding" !== "coding" false so dont add in array.

//         return {
//         ...prevState,
//         interest: newInterest, // newInterest is the final array
//       };
//     });
  };

    return(
        <div>
            <div>
                <label>
                    <input type='checkbox' name='coding' checked={interest.includes("coding")}onChange={handleDataChange}/>
                    Coding
                </label>
            </div>
            <div>
                <label>
                    <input type='checkbox' name='badminton' checked={interest.includes("badminton")}onChange={handleDataChange}/>
                    Badminton
                </label>
            </div>
            <div>
                <label>
                    <input type='checkbox' name='music' checked={interest.includes("music")}onChange={handleDataChange}/>
                    Music
                </label>
            </div>
            {error.interest && <span className='error'>{error.interest}</span>}
        </div>

    )
}

export default Interest