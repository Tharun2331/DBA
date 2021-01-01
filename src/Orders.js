import React from 'react'
import  CartCheckout  from "./cartCheckout"
import {useHistory}  from "react-router-dom";
import "./Orders.css"
import { useStateValue } from "./StateProvider";
import OrdersCart from './ordersCart';
function Orders() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        
        <div className="checkout">
        <div className="checkout__left">
          <div>
        
            <h2 className="checkout__title">Your orders</h2>
  <div className="main_content_checkout">
  {basket.map((item) => (
              <OrdersCart
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
              />
            ))}
  </div>
            
          </div>
        </div>
        
          </div>
    
     
    )
}

export default Orders;
