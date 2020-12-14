import React, {useState} from "react";
import  "./Card-List.css";
import Card from "./Card";
import items from "./SHOP_DATA";

const CardList = ({name,id,imageUrl}) => {
        return (
            <div style={{ padding: "5%"}}>
                
                 <h1 className="heading">Top Selling Products</h1>
                    <div className="main_content">
                        {
                            items
                            .filter((item,idx) => idx < 3)
                            .map(({name, id, imageUrl, price}) => (
                                <Card key={id} name={name} imageUrl={imageUrl} price={price} />
                            ))
                        }
                    
                    </div>
                    
                
                 <h1 className="heading">Minimum 40% Discount on all these items</h1>
                 <h4 style={{marginLeft:"0%"}}>Curated For You</h4>
                    <div className="main_content">
                    {
                            items
                            .filter((item,idx) => idx >12 && idx<19)
                             .map(({name, id, imageUrl, price }) => (
                                <Card key={id} name={name} imageUrl={imageUrl} price={price} />
                            ))
                        }   
                    

                </div>
            </div>
        )
}

export default CardList;