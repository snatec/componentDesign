import React from 'react';
import './PageComponent.css';

const Pagination = ({currentPage,numberOfPages,goToPrevPage,goToNextPage,setCurrentPage}) => {
return(
 <div className='pagination-container'>
    <button disabled={currentPage==0} className='pageNumber' onClick={(item)=> goToPrevPage(item)}>◀️</button>

    {[...Array(numberOfPages).keys()].map((item)=>(
    <button className={'pageNumber ' + (item === currentPage ? 'pageNumberActive' : '')} key={item} onClick={()=> setCurrentPage(item)}>{item}</button>
    ))}

    <button disabled={currentPage==numberOfPages-1} className='pageNumber' onClick={(item)=> goToNextPage(item)}>▶️</button>
</div>
)}

export default Pagination;