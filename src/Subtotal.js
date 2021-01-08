import React, {useEffect, useState} from "react";
import Axios from "axios";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";


function Subtotal({length, total, grandTotal}) {
  
  

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              {/* Part of the homework */}
              Total Cost Of Products({length} items): <strong>${total}</strong>
              <br />
              <p>+ 18% GST</p>
            </p>
            <p>
              {/* Part of the homework */}
              Grand Total: <strong>${grandTotal}</strong><br /> (Inclusive of all taxes)  
            </p>
            
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

    </div>
  );
}

export default Subtotal;
