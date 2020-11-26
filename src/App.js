import './App.css';
import React from "react";
import {BrowserRouter as  Router,Switch,Route } from "react-router-dom";
import Header from './Header';
import HomePage from './Home-page';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
       <Router>
      <Route  path="/">
        <Header />
        <HomePage />
        <Footer />
      </Route>
      </Router>
    </div>
  );
}

export default App;
  