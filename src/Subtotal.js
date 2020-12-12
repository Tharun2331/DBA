<<<<<<< HEAD
// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
// import { useHistory } from "react-router-dom";

// function Subtotal() {
//   const history = useHistory();
//   const [{ basket }, dispatch] = useStateValue();

//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               {/* Part of the homework */}
//               Subtotal ({basket.length} items): <strong>{value}</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)} // Part of the homework
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />

//       <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
//     </div>
//   );
// }

// export default Subtotal;
=======
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();


   

  return (
    <div className="subtotal">
    <CurrencyFormat
    renderText={(value) => (
      <>
        <p>
     
          Total ({basket.length} items): <strong>{value}</strong>
        </p>
        
      </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)} 
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
  />

      
    </div>
  );
}

export default Subtotal;
>>>>>>> 8cb56757c76c057fa0d020e038d41c84876038ed
