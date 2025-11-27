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
       const focusElementList = dialogRef.current.querySelectorAll('.myButton, .myLink, .closeContent');

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
  // Delay until modal is fully rendered
  setTimeout(() => {

    const firstButton = dialogRef.current?.querySelector('.myButton');
    const closeBtn = dialogRef.current?.querySelector('.closeContent');

    const elem = firstButton || closeBtn;
    if (!elem) return;

    // Apply focus immediately
    elem.focus();

    // Add highlight class after focus so it triggers animation
    elem.classList.add("focus-highlight");

    // Remove highlight after 1.5 seconds (adjust time if needed)
    const timer = setTimeout(() => {
      elem.classList.remove("focus-highlight");
    }, 1500);

    return () => clearTimeout(timer);

  }, 50);
}, []);

    return(
        <div className='dialog'>
            <div className='dialogBackdrop' onClick={()=> onClose()}></div>
                <div className='dialogContent' ref={dialogRef} aria-modal="true">
                    <button className='closeContent' onClick={()=> onClose()}>x</button>
                    {children}
            </div>
        </div>
    )
}

export default Modal