import React, {useState,useEffect} from "react";
import "./checkoutPage.css";
import { useStateValue } from "./StateProvider";
import StripeCheckoutButton from "./Stripe";
import CartCheckout from "./cartCheckout";
import { getBasketTotal } from "./reducer";
import {useHistory}  from "react-router-dom";
import Axios from "axios";
import Subtotal from "./Subtotal";
import CustomButton from "./Custom-Button";


function Checkout() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [grandTotal, setGrandTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);

  useEffect(()=>{
    const getCartTotal = async () => {
      const getTotal = await Axios({method: "GET", url :"http://localhost:8090/total"});
      const properData = getTotal.data[0];
      console.log( properData);
      const total = properData[0].total;
      setTotal(total);
      console.log(total);
    }
  const getCartGrandTotal = async () => {
        const getGrandTotal = await Axios({method: "GET", url :"http://localhost:8090/grandTotal"});
        const properData = getGrandTotal.data[0];
        const grandTotal = properData.tax_amount;
        setGrandTotal(grandTotal);
        console.log(grandTotal);
      }
      const getProductsAction = async () => {
        const getProducts = await Axios({method: "GET", url :"http://localhost:8090/products"});
        setItems(getProducts.data);
        console.log(getProducts);
      }
    
     
      getProductsAction();
      getCartTotal();
      getCartGrandTotal();
  }, []);

  console.log("total",total)

  const handleClick = () => {
    if(basket.length) {
      history.push("/orders");
    }
    else {
      alert("Basket is empty, why not fill it up?");
    }
   

  }

  const handleClick1 = () => {
    Axios.post("http://localhost:8090/emptyCart");
        dispatch({
          type: "EMPTY_BASKET",
          basket: null, 
        });
  }

  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
<div className="main_content_checkout">
{basket?.map((item) => (
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
       <div className="bigTotal"> 
        <div className="totalContainer">
            <Subtotal length={basket.length} total={!basket.length ? 0: total } grandTotal={!basket.length ? 0: grandTotal} />
        </div>
        <CustomButton 
        onClick={handleClick1}
        >
          EMPTY CART
        </CustomButton>
        <div className="warningContainer">
        Please use the following test credit card for payments
           <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        
        <div style={{paddingTop: "15px"}} onClick={handleClick}>
        {basket.length ? <StripeCheckoutButton price={getBasketTotal(basket)} /> : null}
        </div>

        
        
       

        </div>
     </div> 
    
     
              
         
    </div>
  );
}

export default Checkout;

