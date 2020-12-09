import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./Home-page";
import Footer from "./Footer";
import ContactUs from "./Contacts";
import SignInAndSignUp from "./SignInAndSignUp";
 //wassup
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>

          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/sign-in">
            <SignInAndSignUp />
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
