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
import { MainPost } from './components/MainPost';
import Chat from './components/Chat';
import Users from './components/Users';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <ToastContainer autoClose={5000} /> */}
        <Routes>
          <Route path='/registration' element={
            <>
              {/* <Users/> */}
              <UserRegistration/>
            </>
          }></Route>
            
          <Route path='/login' element={
          <>
            {/* <Users/> */}
            <UserLogin/>
          </>
          }></Route>

          <Route path='/user' element={
            <>
              {/* <Users/> */}
              <Navbar/>
              <Tabs/>
            </>
          }>
            <Route path='chat' element={
              <>
                <Chat/>
              </>}>
            </Route>
            <Route path='posts' element={
              <>
                <MainPost/>
              </>}>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);