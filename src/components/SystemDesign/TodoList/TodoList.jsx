import React,{useState} from 'react';
import './TodoList.css';

const todoList = () => {

    const [input,setInput] = useState('');
    const [todoList, setTodolist] = useState([]);

    const addTodoItem = () => {
        if(input.trim() == '') return;

        const Item = {
            id: todoList.length+1, // starting 1,then 2
            text: input,
            completed: false
        }
        setTodolist( prev => [...prev, Item] );
        setInput('');
    }

    const toggleCompleted = (id) => {
        setTodolist(todoList.map(item => {
            if(item.id == id)
                return {...item, completed: !item.completed}
             else return item;
              }))
    }

    const handleDelete = (id) => {

        setTodolist(todoList.filter(item => item.id !== id))
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            addTodoItem();
        }
    }

    return (
        <div>
            <input 
                type='text' 
                value={input} 
                placeholder='Enter todo' 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e)=>handleKeyDown(e)}
            />
            <button onClick={()=> addTodoItem()}>Add</button>
            {todoList.map((item) => {
                return(
                <ul>
                    <li key={item.id}>
                        <input type='checkbox' checkbox={item.completed} onChange={()=> toggleCompleted(item.id)}/>
                        <span className={item.completed ? 'strikeThrough' : ''}>{item.text}</span>
                        <button onClick={()=> handleDelete(item.id)}>delete</button>
                    </li>
                </ul>
            )
            })}
        </div>
    );
}

export default todoList;