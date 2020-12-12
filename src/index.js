import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import {initialState,reducer} from "./reducer";


ReactDOM.render(
  <React.StrictMode>

<<<<<<< HEAD
   

=======
>>>>>>> 8cb56757c76c057fa0d020e038d41c84876038ed
  <StateProvider initialState={initialState} reducer={reducer}>
      <App />
  </StateProvider>  

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
