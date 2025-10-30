import './Accordion.css'; // Assuming you have some styles for this component
import Accordion from './Accordion';
import React from 'react';

const AccordionMain = () => {

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

    return (
        <div className='containerMain'>
        <div>Accordian</div>
         <Accordion items={items}/>
        </div>
    )
}

export default AccordionMain