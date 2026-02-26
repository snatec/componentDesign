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