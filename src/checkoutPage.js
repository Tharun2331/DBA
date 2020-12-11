
import React from "react";
import "./checkoutPage.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Card from "./Card";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <Card
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}

        </div>
      </div>

      
    </div>
  );
}

export default Checkout;