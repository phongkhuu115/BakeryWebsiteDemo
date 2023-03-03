import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as Authentication from './components/authentication';
import Detail from './components/products/Detail';
import MainPage from './components/main/MainPage';
import Cart from './components/cart/Cart';
import Order from './components/order/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { persistor,store } from './components/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'>
            <Route index element={<Authentication.Login />} />
            <Route path='register' element={<Authentication.Register />} />
          </Route>
          <Route exact path='/shop'>
            <Route index element={<MainPage />} />
            <Route path='detail' element={<Detail />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route exact path='/order'>
            <Route index element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
