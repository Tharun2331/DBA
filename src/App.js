import './App.css';
import React from "react";
import {BrowserRouter as  Router,Switch,Route } from "react-router-dom";
import Header from './Header';
import HomePage from './Home-page';

function App() {
  return (
    <div className="App">
       <Router>
      <Route  path="/">
        <Header />
        <HomePage />
      </Route>
      </Router>
    </div>
  );
}

export default App;
  