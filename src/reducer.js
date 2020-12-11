export const initialState = {
    user: null,
  
  };
  



//   // Selector
//   export const getBasketTotal = (basket) => 
//     basket?.reduce((amount, item) => item.price + amount, 0);

  
export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
    
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }

  };

  
  
  

