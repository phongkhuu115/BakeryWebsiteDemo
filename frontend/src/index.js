import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as Authentication from './components/authentication';
import Detail from './components/products/Detail';
import MainPage from './components/main/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'>
            <Route index element={<Authentication.Login />} />
            <Route path='register' element={<Authentication.Register />} />
          </Route>
          <Route exact path='/shop'>
            <Route index element={<MainPage />} />
            <Route path='detail' element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
