import React from 'react';

import { useStateValue } from './StateProvider';
import { store } from 'react-notifications-component';
import ReactNotifications from 'react-notifications-component'
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
        <>
      
        <button className="btn"
          onClick={() => {
            store.addNotification({
              title: 'Removed from the cart',
              message: `${name}`,
              type: 'info',                         // 'default', 'success', 'info', 'warning'
              container: 'top-right',                // where to position the notifications
              animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
              animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
              dismiss: {
                duration: 3000
              }
            })
            removeFromBasket();
          }}
        >
           <span > Remove from basket </span>
        </button>
      </>
    </div>
</div>
   
    
    )
}

export default CartCheckout



 