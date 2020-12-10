import React from 'react';
import "./Card.scss";

const Card = ({name, imageUrl, price}) => {
    return (
      
      <div className="cards"> 
        <div className='menu-item'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='content'>
          <span className='subtitle'>ADD TO CART</span>
        </div>
      </div>
      <div className="card-name">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      </div>
    )
}

export default Card
