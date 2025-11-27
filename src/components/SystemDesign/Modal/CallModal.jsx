import React, { useState } from 'react';
import Modal from './Modal';
import './CallModal.css';

const CallModal = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    // Modal needs content and close func

    return(
        <div>
        <button onClick={()=> handleShowModal()}>View details</button>
        {showModal &&
         <Modal onClose={handleCloseModal}>
            <h1>Hello everyone</h1>
            <p>Details are here: operator uijooioioioioioioi</p>
            <div className='subContainer'>
                 <button className="myButton"  tabIndex="0">Submit</button>
                <a href='#' className="myLink"  tabIndex="0">tnc</a>
            </div>
        </Modal>}
       </div>
    )
}

export default CallModal