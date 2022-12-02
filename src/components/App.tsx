import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Chat from './Chat';
import { MainPost } from './MainPost';
import { Navbar } from './Navbar';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import { GetAccessToken } from '../api/jwtDecodeToken';
import { AuthUser } from '../features/user/user-slice';
import Tabs from './Tabs';


import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './NotFound';
import { useState } from 'react';
import Profile from './Profile';




const App:React.FC=()=>{
    const dispatch = useDispatch();
    const token = GetAccessToken();
    var isAuth = useSelector((state:any)=>state.user.isAuth);
    

    useEffect(()=>{
        if(token){
            dispatch(AuthUser(token));
        }
    },[])

    return<>
    
    <Routes>

        {/* <Route path='/' element={<Login/>}></Route> */}
        {!isAuth ?
        <>
            <Route path='*' element={<NotFound/>}></Route>

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
        </>
        :""}
          
        {isAuth?
        <>
        <Route path='*' element={<NotFound/>}></Route>

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
            <Route path="profile/:userId" element={<Profile/>} />
                
            </Route>
        </>

        :""}
        </Routes>
        
    </>
} 

export default App;