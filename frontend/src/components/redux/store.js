import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import userReducer from './UserSlice';
import cartIDReducer from './CartIDSlice';
import cartPaymentReducer from './CartPayment';
import cartAddReducer from './CartAddSlice'

const userConfig = {
  key: 'user',
  storage,
  stateReconciler: autoMergeLevel2,
};

const cartIDConfig = {
  key: 'cartID',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedUser = persistReducer(userConfig, userReducer);
const persistedCartID = persistReducer(cartIDConfig, cartIDReducer);

export const store = configureStore({
  reducer: {
    userData: persistedUser,
    cart: persistedCartID,
    cartPayment: cartPaymentReducer,
    cartAdd: cartAddReducer
  },
});

export const persistor = persistStore(store);
