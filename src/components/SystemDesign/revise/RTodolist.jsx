import React, { useEffect, useState } from "react";

export default function RTodolist() {
              const[input,setInput] = useState('');
             const[todolist,setTodolist] = useState([]);

    const handleAddition = () => {
        if(input.trim() == '') return;

        const Item = {
                id: todolist.length+1,
                name: input,
                completed: false
            }

        setTodolist(prev => [...prev, Item]);
        setInput('');
    }

    const handleDeletion = (id) => {
        setTodolist(todolist.filter(item => item.id != id));
    }

    const handleKeyDown = (e) => {
        if(e.key == 'Enter') {
            handleAddition(e.target.value);
        }
    }

    const handleCompletion = (id) => {
        setTodolist(todolist.map((item)=> {
            if(id == item.id){
                 return {...item, completed: !item.completed}
            } else return item;
        })
        )
    }
  return(
      <div>
        <h1>Todolist</h1>          
          <input
              type='text' 
              value={input} 
               onChange={(e)=> setInput(e.target.value)}
              onKeyDown = {(e)=> handleKeyDown(e)}
        />
          <button onClick={()=> handleAddition()} aria-label="Add new todo item">Add</button>
          {todolist && todolist.length>0 &&
        <div>
            {todolist.map((item,index)=> (
            <div  key={index}>
              <div className={item.completed? 'strikethrough': ''}>{item.name}</div>
             <input 
                 type='checkbox'
                 checked={item.completed}
                 onChange={()=> handleCompletion(item.id)}
                 />
            <button onClick={()=> handleDeletion(item.id)}>Delete</button>
             </div>
              ))}
          </div>}
          
      </div>
  )
}
