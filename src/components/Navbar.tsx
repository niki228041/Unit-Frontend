import React from 'react';
import 'bootstrap';

import "./StylesForUIComponents.css"
import logo from "../Images/UNIT.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Grid, Input } from '@mui/material';

export const Navbar=()=>{
    const navigate = useNavigate();

    const [onSearch,setSearch]= useState(false);
    const [inputText, setInputText] = useState('');

    // searchBar_click

    const handleGo=(e:string)=>{
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
                    </Grid>
                    
                </Grid>
                <Grid xs={3} item >
                </Grid>
            </Grid>
        </nav>
        </header>
    </>
}
