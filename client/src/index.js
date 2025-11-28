import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';
import reducers from './reducers';
import { ClerkProvider } from '@clerk/clerk-react';

//clerk setup
const CLERK_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!CLERK_KEY) {
  throw new Error('Missing Publishable Key')
}


const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <ClerkProvider publishableKey={CLERK_KEY}>
      
    <Provider store={store}>
      
        <App /> 
     
      
    </Provider>
      
    </ClerkProvider>
 
  </React.StrictMode>
);
