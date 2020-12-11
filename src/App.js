import "./App.css";

import React,{ useEffect} from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./Home-page";
import Footer from "./Footer";
import ContactUs from "./Contacts";
import SignInAndSignUp from "./SignInAndSignUp";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
import Shop from "./Shop";

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

    
  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
      <Header />
=======

      <Header />
=======
        <Header />


>>>>>>> 6e607526e0d4a0d6eb9329b7a2aed67f35aeb0b3
        <Switch>

          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/sign-in">
            <SignInAndSignUp />
          </Route>
          <Route path="/shop">
              <Shop />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
  }

export default App;
