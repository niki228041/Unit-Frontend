import React from 'react';
import 'bootstrap';

import "./StylesForUIComponents.css"
import logo from "../Images/UNIT.png";
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { Grid, Input } from '@mui/material';
import { useGetUsersQuery } from '../features/user/apiSlice';
// import { computed, ref } from 'vue';

export const Navbar=()=>{
    const navigate = useNavigate();

    const [onSearch,setSearch]= useState(false);
    const [inputText, setInputText] = useState('');
    const [dropdown, setDropdown] = useState(false);

    var Users = [{}];
    const {data} = useGetUsersQuery();
    Users = data?.contacts;

    // searchBar_click

    const sortArr=()=>{
        
        console.log("Do");
        console.log(Users);

        var arrayForSort = [...Users];
            // || e2.salary - e1.salary
        // function bysur(n1:any, n2:any) {

        //     let sname1 = n1.split(' ')[1];
        //     let sname2 = n2.split(' ')[1];
        
        //     if (sname1 > sname2) return 1;
        //     if (sname1 < sname2) return -1;
        //     return 0;
        // }
    }

    useEffect(()=>{
        setDropdown(inputText.length != 0 );
    },[inputText])

    const handleGo=(e:string)=>{
        // sortArr();
        setInputText(e);
        
        console.log(typeof(e));
        if(e == '' || e == null){
            setSearch(false);
            // navigate("posts")
        }
        else{
            setSearch(true);
            // navigate("search");
        }
    }

    const sendToSelectedUserProfile=(user:any)=>
    {
        setInputText('');
        navigate('profile/' + user.id);
    }


    return <>
        <header>
        <nav className='upBar'>
            <Grid container direction="row"  >
                <Grid xs={3} item >
                    <img src={logo} className="logo"></img>
                </Grid>
                <Grid xs={6} container item  alignContent="center" justifyContent="center" paddingLeft={2} paddingRight={2}>
                    <Grid item style={{width:"100%"}}>
                        {
                        onSearch
                        ?
                        <input value={inputText} onChange={event => handleGo(event.target.value)} className="form-control searchBar_click" placeholder="Search in UNIT"/>
                        :
                        <input value={inputText} onChange={event => handleGo(event.target.value)} className="form-control searchBar" placeholder="Search in UNIT"/>
                        }
                        {dropdown?
                            <ul style={{width:"48.5%",maxHeight:"320px"}} className='absolute  font-normal shadow-md p-0 chatSection example'>
                            {Users?.filter((item:any)=>{return inputText.toLowerCase() === ' ' ? item : item.username.toLowerCase().includes(inputText) }).map((user:any)=><li onClick={()=>sendToSelectedUserProfile(user)} className='searchBar_selector' key={user.id}>{user.username}</li>)}
                            </ul>
                        :""}
                        
                    </Grid>
                </Grid>
                
                <Grid xs={3} item >
                </Grid>

            </Grid>
        </nav>
        </header>
    </>
}
