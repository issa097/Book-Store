import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cartprovider from './context/Cartprovieder';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cartprovider>
    <App />
    </Cartprovider>
   
  </React.StrictMode>
);


