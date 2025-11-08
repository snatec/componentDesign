import React from 'react';
import './PageComponent.css';

const ProductCard = ({title,image}) => {
    return (
        <div className='product-card'>
            <div>{title}</div>
            <img src={image} alt={title} width={180}/>
        </div>
    )
}

export default ProductCard