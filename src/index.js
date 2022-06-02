import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import myFruitchiPetReducer from './reducers/myFruitchiPet';
import backgroundClassesReducer from './reducers/backgroundClasses';

const store = configureStore({
  reducer: {
    myFruitchiPet: myFruitchiPetReducer,
    backgroundClasses: backgroundClassesReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
