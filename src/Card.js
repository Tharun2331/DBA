import React from 'react';
import "./Card.css";
import { useStateValue } from './StateProvider';
import { store } from 'react-notifications-component';
import Axios from "axios";

const Card = ({name, id, imageUrl, price}) => {
  const [{basket},dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price
            }
    });
  }; 
 
  // setProductId(id);
  console.log(id);


  
  
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
      
        <button className="btn1"
          onClick={() => {
            store.addNotification({
              title: 'Added to the cart',
              message: `${name}`,
              type: 'success',                         // 'default', 'success', 'info', 'warning'
              container: 'bottom-right',                // where to position the notifications
              animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
              animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
              dismiss: {
                duration: 3000
              }
            });
            addToBasket();

            Axios.post("http://localhost:8090/cart",
         {
           productId: id
        });
     
          }}
        >
           <span> Add to basket </span>
        </button>
      </>
    </div>
</div>
   
    )
}

export default Card



 