import React from 'react';
import {useHistory} from "react-router-dom";
import "./shopnow.scss"


const ShopNow = ({name, imageUrl, price}) => {
       
        const history = useHistory();
    
        const  handleClicks = () => {
       history.push("/shop")      
  }
  
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
          <span className='subtitle' onClick={handleClicks}>Shop Now</span>
        </div>
      </div>
      <div className="card-name">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      </div>
    )
}

export default ShopNow ;
