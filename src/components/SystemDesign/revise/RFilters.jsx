import React, {useState, useEffect, useMemo} from 'react';

export default function RFilters() {
    
const recipesData = [
  { id: 1, name: "Pizza", category: "Lunch", prepTime: 30 },
  { id: 2, name: "Pancakes", category: "Breakfast", prepTime: 15 },
  { id: 3, name: "Burger", category: "Lunch", prepTime: 25 },
  { id: 4, name: "Salad", category: "Dinner", prepTime: 10 },
  { id: 5, name: "Pasta", category: "Dinner", prepTime: 20 },
  { id: 6, name: "Omelette", category: "Breakfast", prepTime: 5 },
  { id: 7, name: "Omelette", category: "Breakfast", prepTime: 5 },
  { id: 8, name: "Omelette", category: "Breakfast", prepTime: 5 }
];

    const[data,setData] = useState([]);
    const[sortOrder,setSortOrder] = useState('default'); //default | asc | desc
    const[input,setInput] = useState('');
    const[filterValue, setFilterValue] = useState('All');
    const[currentPage, setCurrentPage] =  useState(0);

    useEffect(()=> {
        setData(recipesData);
    },[])

    const filteredData = useMemo(()=> {

        let result = [...data];
        
        if(sortOrder == 'asc'){
            result.sort((a,b) => a.prepTime - b.prepTime);
        } else if(sortOrder == 'desc'){
             result.sort((a,b) => b.prepTime - a.prepTime);
        }

        if(filterValue != 'All' ){
            result = result.filter(item=> item.category == filterValue);
        }

        if(input.trim() !== ''){
            result = result.filter(item=> item.name.toLowerCase().includes(input.toLowerCase()) );
        }
        
        return result;
        
    },[data,sortOrder,filterValue,input])

useEffect(() => {
  setCurrentPage(0);
}, [sortOrder, filterValue, input]);
    
    const handleSort = () => {
        if(sortOrder == 'default')  setSortOrder('asc');
        else if(sortOrder == 'asc') setSortOrder('desc');
        else setSortOrder('default');
    }

        const pageSize = 5;
        const totalPage = Math.ceil(filteredData.length/pageSize); //4

      const paginatedData = filteredData.slice(currentPage * pageSize , currentPage * pageSize + pageSize);

    // 15, 4   -> 0 to 4, 5 to 9, 10 to 14, 15  0*4 + 4 = 4, 1*4 + 4 = 8

    const handlePrev = () => {
        setCurrentPage((prev) => prev -1)
    }

    const handleNext = () => {
        setCurrentPage((prev) => prev + 1)
    }
    
    return (
        <div>
            <input
                type= 'text'
                value={input}
                placeholder={'Search by name of recipie'}
                onChange={(e)=> setInput(e.target.value)}
            />
            <select value={filterValue} onChange={(e)=> setFilterValue(e.target.value)} style={{marginLeft:10}}>
                <option>All</option>
                 <option>Breakfast</option>
                 <option>Lunch</option>
                 <option>Dinner</option>
            </select>
            <h1>Table</h1>
            <table border='1' cellPadding='10' style={{marginTop:10}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th style={{cursor: 'pointer'}}>PrepTime <span onClick={()=>handleSort() }>({sortOrder})</span></th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item) => (
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                         <td>{item.prepTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* pagination */}
           <div style={{display:'flex', gap: 10, marginTop: 10}}>
               <button onClick={()=> handlePrev()} disabled={currentPage == 0}>Prev</button>
               {/* <div>{currentPage}/{totalPage}</div> */}
                {Array.from({length: totalPage}, (_,index)=> {
                    return (
                        <button key ={index} onClick={() => setCurrentPage(index)}>{index+1}</button>
                    )
                    })}
               <button onClick={()=> handleNext()} disabled={currentPage == totalPage - 1}>Next</button>
           </div>
            
        </div>
        
    )
}