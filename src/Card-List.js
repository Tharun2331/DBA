import React, {useState} from "react";
import  "./Card-List.css";
import Card from "./Card";

const CardList = () => {

 const items = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
  ];
        return (
            <div style={{ padding: "5%"}}>
                
                 <span className="heading">Top Selling Products</span>
                    <div className="cards-container card-list">
                        {
                            items.map(({title, id, imageUrl}) => (
                                <Card key={id} title={title} imageUrl={imageUrl}  />
                            ))
                        }
                    
                    </div>
               
                
                 <span className="heading">Discounts</span>
                    <div className="cards-container card-list">
                    {
                            items.map(({title, id, imageUrl }) => (
                                <Card key={id} title={title} imageUrl={imageUrl}  />
                            ))
                        }   
                    

                </div>
            </div>
        )
}

export default CardList;