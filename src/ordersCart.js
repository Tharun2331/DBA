import React from 'react';

const OrdersCart = ({name, id, imageUrl, price}) => {
  
  return (
    <div className="card" key={id}>
    <div className="card_img">
        <img src={imageUrl} alt="" />
    </div>
    <div className="card_header">
        <h2>{name}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing </p>
        <p className="price">{price}<span>$</span></p>
    </div>
</div>
   
    
    )
}

export default OrdersCart;


