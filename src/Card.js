import React from 'react';
import "./Card.css";
import { useStateValue } from './StateProvider';

const Card = ({name, imageUrl, price, rating, id}) => {

  const [{basket},dispatch] = useStateValue();
  const addToBasket = () => {
    
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: name,
        imageUrl: imageUrl,
        price: price,
        rating: rating,
      }
    });
    console.log("done");
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
        <div className="btn" onClick={addToBasket}>Add to cart</div>
    </div>
</div>
      
    )
}

export default Card



 