import React, {useEffect, useState} from "react";
import Axios from "axios";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const [total, setTotal] = useState();

  // useEffect(()=>{
  //   const getCartTotal = async () => {
  //     const getTotal = await Axios({method: "GET", url :"http://localhost:8090/total"});
  //     const properData = getTotal.data[0];
  //     const total = properData[0].sum(p.product_price);
  //     setTotal(total);
  //     console.log(total);
  //   }
  
  //   getCartTotal();
  // }, []);
  

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Total ({basket.length} items): <strong>{value}</strong>
            </p>
            <p>
              {/* Part of the homework */}
              Grand Total : <strong>{value}</strong>
            </p>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

    </div>
  );
}

export default Subtotal;
