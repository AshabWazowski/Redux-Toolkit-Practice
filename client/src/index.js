import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import store from './stateHandler/store.js';


let persistor = persistStore(store);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <PersistGate persistor={persistor}>
   <App />
   </PersistGate>
    </Provider>
  </React.StrictMode>
);
