import React,{useState, useEffect, useRef} from 'react';
import './RModal.css';

export default function RModal() {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    }
   return(
       <div>
           <h1>Modal</h1>
           <button onClick={()=> setShowModal(!showModal)}>Show Modal</button>
           {showModal && <Modal onClose={handleCloseModal} heading={"Tnc view"}>
               <h1>Hello everyone</h1>
                <p>Welcome to today's session. Check for the tnc below</p>
                <a href='/tnc' className='myLink'>Tnc</a>
               <button style={{marginLeft: '10px'}} className='myButton'>Submit</button>
           </Modal>}
       </div>
   )
}

const Modal = ({onClose, children, heading}) => {
    
    const dialogRef = useRef(null);
    
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

    useEffect(()=> {
        setTimeout(() => {
            const firstButton = 
                dialogRef.current && dialogRef.current.querySelector('.myButton');

            if(!firstButton) return;

            firstButton.focus();

            //add css class for highlight
            
  firstButton.classList.add('focus-highlight');
const timer  = setTimeout(()=> {
    firstButton.classList.remove('focus-highlight');
},1500)   ;

            return()=> {
                clearTimeout(timer);
            }
        },50)
    },[])
     const trapFocus = (e) => {
    //    const focusElementList = dialogRef.current.querySelectorAll('button, [href]');
       const focusElementList = dialogRef.current.querySelectorAll('.myButton, .myLink');

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


    return (
        <div className='modalContainer'>
            <div className='backdrop' onClick={onClose}></div>
           <div className="modalBox" aria-modal="true" ref={dialogRef} >
        <div className="headerbox">
          <div>{heading}</div>
          <span style={{ cursor: 'pointer' }} onClick={onClose}>X</span>
        </div>
        <div className="content">{children}</div>
      </div>
        </div>
    )
}