import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import {Navbar} from './components/Navbar';
import Tabs from './components/Tabs';
import { store } from './app/store';

import { Provider } from 'react-redux';

// import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <ToastContainer autoClose={5000} /> */}
        <>
          <App/>
          <Navbar/>
          <Tabs/>
        </>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);