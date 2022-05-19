import React from 'react';
// import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import './index.css'

import {Provider} from 'react-redux'
import store from './components/Redux/store'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
 
   <Provider store={store}>
    <App />
   </Provider>
  
);