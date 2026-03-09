import React,{ useState } from "react";

const Sheet = () => {
    const [sheetData, setSheetData] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])

    const updateSheetCell = (rowIndex,colIndex, value) => {
        const updatedSheet = sheetData.map((row, rowIdx)=> 
            row.map((cell,colIdx)=> (rowIdx == rowIndex && colIdx == colIndex ?
                                    value : cell))
            )
        //When you find the target cell → update it (value), Otherwise → keep old value (cell)
        setSheetData(updatedSheet);
    }

    const handleAddRow = () => {
        setSheetData([...sheetData, Array(sheetData[0].length).fill('')]);
    }

    const handleAddCol = () => {
         setSheetData(sheetData.map((row)=> [...row, ''] ));
    }
    
    return(
       <div className='grid'>
           {sheetData.map((row,rowIndex)=> (
           <div className='row' key={rowIndex}>
               {row.map((cell, colIndex)=> (
                               <input 
                                   key={`${rowIndex} - ${colIndex}`}
                                   className='cell'
                                   onChange= {(e)=> updateSheetCell(rowIndex,colIndex, e.target.value)}
                                   value={cell}
                                />
                           ))} 
           </div>))}
           <div className='buttonDiv'>
               <button onClick={()=> handleAddRow()}>Add Row</button>
                <button  onClick={()=> handleAddCol()}>Add Coloumn</button>
           </div>
       </div>
    )
}

export default Sheet;

// map → map (updates entire grid)
// “You are updating the whole grid for one cell. Can you optimize?” Current: O(n × m)

//   const updateSheetCell = (rowIndex,colIndex, value) => {
//     const updated = [...sheetData];
//     updated[rowIndex] = [...updated[rowIndex]];
//     updated[rowIndex][colIndex] = value;
//     setSheetData(updated);
//   }
//   “This only updates the required row instead of the entire grid.” Optimized: O(n)

// “I used a 2D array to represent the grid where rows and columns map naturally. For updates, I used immutable state updates with nested mapping. I also added dynamic row and column insertion while maintaining consistent structure. 
// This approach ensures React re-renders correctly and keeps the logic scalable.”