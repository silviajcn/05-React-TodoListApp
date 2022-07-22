import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HooksApp from './HooksApp';
import './index.css';

//import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HooksApp />
    </BrowserRouter>
  </React.StrictMode>
)
