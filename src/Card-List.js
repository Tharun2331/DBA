import React, {useState} from "react";
import  "./Card-List.css";
import Card from "./Card";
import items from "./SHOP_DATA";
import ShopNow from "./shopnow";

const CardList = ({name,id,imageUrl}) => {
        return (
            <div style={{ padding: "5%"}}>
                
                 <span className="heading">Top Selling Products</span>
                    <div className="cards-container card-list">
                        {
                            items
                            .filter((item,idx) => idx < 3)
                            .map(({name, id, imageUrl, price}) => (
                                <ShopNow key={id} name={name} imageUrl={imageUrl} price={price} />
                            ))
                        }
                    
                    </div>
               
                
                 <h1 className="heading">Curated For You</h1>
                 <span style={{marginLeft:"7%"}}>Minimum 40% Discount on all these items</span>
                    <div className="cards-container card-list">
                    {
                            items
                            .filter((item,idx) => idx >12 && idx<19)
                             .map(({name, id, imageUrl, price }) => (
                                <ShopNow key={id} name={name} imageUrl={imageUrl} price={price} />
                            ))
                        }   
                    

                </div>
            </div>
        )
}

export default CardList;