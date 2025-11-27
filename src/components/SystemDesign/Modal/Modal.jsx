import React, {useEffect, useRef, useLayoutEffect} from 'react';
import "./Modal.css";

const Modal = ({onClose, children}) => {
    useEffect(()=> {
        const originalStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

         return () => {
         document.body.style.overflow = originalStyle;
        };
    },[])

    const dialogRef = useRef(null);

   // ---- ⌨️ Close on ESC key + Focus Trap ----
  useEffect(() => {

    const handleKeyDown = (e) => {
      // Close on ESC
      if (e.key === "Escape") {
        onClose();
      }

      // Focus trap on TAB key
      if (e.key === "Tab") {
        trapFocus(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);

  }, [onClose]);

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
       else if(!e.shiftKey && document.activeElement == lastFocus)
       {
         e.preventDefault();
         firstFocus.focus();
       }
  }

// ---- ⛳ Set focus to first interactive element when modal opens ----
//   useLayoutEffect(() => {
//   const firstFocusable = dialogRef.current.querySelector('.myButton, .myLink');
//   firstFocusable && firstFocusable.focus();
// }, []); // not working

useEffect(() => {
  setTimeout(() => {
    const firstFocusable = dialogRef.current.querySelector('.myButton, .myLink');
    if (firstFocusable) firstFocusable.focus();
  }, 0);
}, []);


  
    return(
        <div className='dialog'>
            <button className='dialogBackdrop' onClick={()=> onClose()}></button>
                <div className='dialogContent' data-focus ref={dialogRef}>
                    <div className='closeContent' data-focus onClick={()=> onClose()}  tabIndex="-1">x</div>
                    {children}
            </div>
        </div>
    )
}

export default Modal