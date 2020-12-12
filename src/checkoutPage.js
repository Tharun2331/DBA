import React from "react";
import "./checkoutPage.css";
import { useStateValue } from "./StateProvider";
import StripeCheckoutButton from "./Stripe";
import CartCheckout from "./cartCheckout";
import CustomButton from "./Custom-Button";
import { getBasketTotal } from "./reducer";
import Subtotal from "./Subtotal"
import {useHistory}  from "react-router-dom";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
<div className="main_content_checkout">
{basket.map((item) => (
            <CartCheckout
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
  );
}

export default Checkout;
