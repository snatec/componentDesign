1) Accordian

import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
      const data = [
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
    const[indexArr, setIndexArr] = useState([]);

    const handleView = (idx) => {
        if(indexArr.includes(idx)){
            setIndexArr(prev => prev.filter( item => item !== idx));
        }
        else{
            setIndexArr(prev => [...prev, idx]);
        }
    }
   return(
    <div>
            {data.map((item,idx)=> 
            (<div className='container' key = {idx}>
                <div className='titleContainer'>
                    <div>{item.title}</div>
                    <div onClick={()=> handleView(idx)}>{indexArr.includes(idx) ? 'Down' : 'Up'}</div>
                </div>
                {indexArr.includes(idx) && <div>{item.content}</div>}
            </div>))}
        </div>
    )
}
============================================================================================

2) InputChip

import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {

    const[input,setInput] = useState("");
    const[chips,setChips] = useState([]);

    const handleKeyDown = (e) => {
       if(e.key == 'Enter' && input !== ""){
         setChips(prev => [...prev,input]);
         setInput("");
       }
       if (e.key === "Backspace" && !input && chips.length > 0) {
           setChips(prev => prev.slice(0, -1));
        }
    }

    const handleRemoveChip = (index,name) => {
        setChips(prev => prev.filter(item => item !== name));
    }
    
    return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        onKeyDown={(e)=> handleKeyDown(e)} //since keyPress event is deprecated
      />
      <div>
        {chips.map((item,index) => (
        <div style={{background: 'grey', padding: '10px', color: 'white', marginTop: '10px'}}>
            {item}
            <button style={{color:'red'}} onClick={() => handleRemoveChip(index,item)}>x</button>
        </div>))}
      </div>
    </div>
  );
}

============================================================================================

3) Modal

import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
    const [showModal,setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return(
        <div>
            <h1>Modal box</h1>
            <button onClick={()=> handleShowModal(true)}>View Details</button>
            {showModal && <Modal onClose={handleCloseModal} heading={'Tnc Submit'}>
                <div>
                    <h1>Hello everyone</h1>
                    <a href='/demo' className='myLink'>Kindly view the tnc</a> <br></br>
                    <button style={{marginTop: 10}} className='myButton'>Submit</button>
                </div>
            </Modal>}
        </div>
    )
}

const Modal = ({onClose, children, heading}) => {

    const modalRef = useRef(null);

    useEffect(()=> {
       const handleKeyDown = (e) => {
           if(e.key == 'Escape'){
            onClose();
        }

           if(e.key == 'Tab'){
               trapFocus(e);
           }
       }
        document.addEventListener("keydown", handleKeyDown);

        return ()=> {
            document.removeEventListener("keydown", handleKeyDown);
        }
        },[])
    
    const trapFocus = (e) => {
        const focusElementList = modalRef.current.querySelectorAll('.myButton, .myLink');
        if(focusElementList.length == 0) return;

       const firstFocus = focusElementList[0];
       const lastFocus = focusElementList[focusElementList.length - 1];

     if(e.shiftKey && document.activeElement == firstFocus)
       {
         e.preventDefault();
         lastFocus.focus();
       }
       else if(!e.shiftKey && document.activeElement == lastFocus)// user pressed only tab not shift key
       {
         e.preventDefault();
         firstFocus.focus();
       }
    }

    useEffect(()=> {
        const Button = 
                modalRef.current && modalRef.current.querySelector('.myButton');

            if(!Button) return;

            Button.focus();
        Button.classList.add('focus-highlight');
        const timer  = setTimeout(()=> {
                    Button.classList.remove('focus-highlight');
                },1500)   ;
         return()=> {
                clearTimeout(timer);
            }
                                                   
    })
    return(
        <div className='modalContainer'>
             <div className='backDrop'/>
            <div className='content' ref = {modalRef}>
                <div className='headingContainer'>
                    <div>{heading}</div>
                    <span onClick={()=>onClose()}>X</span>
                </div>
                <div className='mainContent'>
                   {children}
                </div>
            </div>    
        </div>
    )
}