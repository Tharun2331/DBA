import React from 'react';

import { useStateValue } from './StateProvider';
const CartCheckout = ({name, id, imageUrl, price}) => {

  const [{basket},dispatch] = useStateValue();
  const removeFromBasket= () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
        id:id
    });
    console.log('done');
  }; 
     
  
  return (
    <div className="card" key={id}>
    <div className="card_img">
        <img src={imageUrl} alt="" />
    </div>
    <div className="card_header">
        <h2>{name}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing </p>
        <p className="price">{price}<span>$</span></p>
        <div className="btn" onClick={removeFromBasket}>
           Remove from basket
        </div>
    </div>
</div>
   
    
    )
}

export default CartCheckout



 