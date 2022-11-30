import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import {Navbar} from './components/Navbar';
import Tabs from './components/Tabs';
import { store } from './app/store';

import { Provider } from 'react-redux';

// import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './features/user/Login';
// const isAuth = useSelector((state:any)=>state.user.isAuth);
import { Modal } from './components/ReactModalComponent';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './features/user/apiSlice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
          <BrowserRouter>
            {/* <ToastContainer autoClose={5000} /> */}
              <App/>
              
          </BrowserRouter>
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);