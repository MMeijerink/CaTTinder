import React from 'react';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './state/store'
import './index.css';
import { persistStore } from 'redux-persist';

const container = document.getElementById('root')!;
const root = createRoot(container);

let persistor = persistStore(store);
root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
