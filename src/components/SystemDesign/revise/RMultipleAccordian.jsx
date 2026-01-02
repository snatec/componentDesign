import React, { useState, useEffect } from "react";
import './RMultipleAccordian.css';

export default function RMultipleAccordian() {
   const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];

return(
    <div>
    <h1>Accordian</h1>
        <Accordian data={items}/>
    </div>
)
}


const Accordian = ({data}) => {
    const [index, setIndex] = useState([]);

    const handleView = (id) => {
        if(index.includes(id)){
            setIndex(index.filter(item => id !== item));
        }
        else{
            setIndex([...index, id]);
        }
    }
    
    return(
        <div>
            {data.map((item,idx)=> 
            (<div className='container' key = {idx}>
                <div className='titleContainer'>
                    <div>{item.title}</div>
                    <div onClick={()=> handleView(idx)}>{index.includes(idx) ? 'Down' : 'Up'}</div>
                </div>
                {index.includes(idx) && <div>{item.content}</div>}
            </div>))}
        </div>
    )
}