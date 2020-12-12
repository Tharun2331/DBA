import "./App.css";

<<<<<<< HEAD
import React,{useEffect} from "react";

=======
import React,{ useEffect} from "react";
>>>>>>> 8cb56757c76c057fa0d020e038d41c84876038ed

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./Home-page";
import Footer from "./Footer";
import ContactUs from "./Contacts";
import SignInAndSignUp from "./SignInAndSignUp";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
import Shop from "./Shop";

import CheckoutPage from "./checkoutPage";

function App() {

  const [{}, dispatch ] = useStateValue();


  useEffect(() => {
    // check user is logged in or not
   
       auth.onAuthStateChanged((authUser) => {
         console.log("THE USER IS > ", authUser);
   
         if (authUser) {
           dispatch({
             type: "SET_USER",
             user: authUser,
           });
         } else {
           
           dispatch({
             type: "SET_USER",
             user: null,
           });
         }
       });
     },[]);

<<<<<<< HEAD

return(
<Router>
  <div>
        <Switch>


=======
    
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>

>>>>>>> 8cb56757c76c057fa0d020e038d41c84876038ed
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/sign-in">
            <SignInAndSignUp />
          </Route>
          <Route path="/shop">
              <Shop />
          </Route>
          <Route path="/checkout">
              <CheckoutPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
    <Footer />
      </div>
    </Router>
  );
  }

export default App;
