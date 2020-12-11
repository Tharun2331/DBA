import React from 'react';
import Card from "./Card";
import "./Shop.css";
import items from "./SHOP_DATA";
   

function Shop() {
    console.log(items.name);
    return (
            <div className=" card-list">
           { items.map(({name, id, imageUrl, price}) => (
                <Card key={id} name={name} imageUrl={imageUrl} price={price} />
            ))}
        </div>
       
    )                   
}

export default Shop;




