import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./StylesForUIComponents.css"
import 'bootstrap';

import post from "../Images/MainPost.png"
import { ThemeProvider,createTheme } from '@mui/material/styles';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import ava from '../Images/ava.png'
import like from '../Images/heart.png'
import views from '../Images/views.png'

import mainPic from '../Images/rei_2.jpg'
import choise from '../Images/NotChoised.png'

const mdTheme = createTheme();

const styling ={
    container:{
        border: '1px solid',
        paddingRight: 2,
        paddingBottom: 2,
    }
}

export const MainPost=()=>{
    return <>
    <ThemeProvider theme={mdTheme}>

        {/*post*/}
       <Grid container className='mainPost' direction="column">
            {/* upper info */}
            <Grid container item xs={2.5} direction="row">
                
                {/* icon */}
                <Grid container item xs={1.5} direction="column" padding={1}>
                    <Grid container item xs={3} alignContent="center" marginLeft={2}>
                        <Grid item className='bottom_box_texture' >
                            niki228041
                        </Grid>
                    </Grid>
                    <Grid container item xs={9} alignContent="center" marginLeft={2}>
                        <img src={ava} style={{height:"70px"}}></img>
                    </Grid>
                </Grid>

                {/* title */}
                <Grid container item xs={8.5} direction="column" alignContent="center" justifyContent="flex-start" padding={2}>
                    <Grid item container className='bottom_box_texture fs-3'>
                        Me fr
                    </Grid>
                </Grid>

                {/* like views date */}
                <Grid container item xs={2} direction="column" padding={1}>
                    <Grid container item xs={5} padding={0.3}>
                        <Grid item container className='bottom_box_texture' alignContent="center" direction="row" >
                            <Grid item container xs={5}>
                                <img src={like} style={{height:"30px"}} className="like_icon"></img>
                            </Grid>
                            <Grid item container xs={7} style={{fontSize:"13px"}} alignContent="center">
                                14k likes
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item xs={3}  padding={0.3}>
                        <Grid item container className='bottom_box_texture' alignContent="center" direction="row">
                            
                            <Grid item container xs={5} alignContent="center">
                                <img src={views} style={{height:"15px",marginLeft:"5px"}}></img>
                            </Grid>
                            <Grid item container xs={7} style={{fontSize:"13px"}}>
                                22k views
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item xs={3}  padding={0.3}>
                        <Grid item container className='bottom_box_texture' alignContent="center" direction="row">
                           <Grid item container xs={5} style={{fontSize:"13px"}}>
                                Date:
                            </Grid>
                            <Grid item container xs={7} style={{fontSize:"13px"}} alignContent="flex-start">
                                22.02.2005
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* down picture and desctiption */}
            <Grid container item xs={9.5} direction="row">
                {/* picture */}
                <Grid container item xs={8} padding={2}>
                    {/* <img src={mainPic} style={{borderRadius:"5px",width:"100%"}}></img> */}
                    <Grid style={{borderRadius:"5px",width:"100%"}} item className="mainPic">
                    {/* <img src={mainPic} style={{borderRadius:"5px",width:"100%"}}></img> */}
                    </Grid>
                </Grid>
                
                {/* desctiption */}
                <Grid container item xs={4} padding={2}>
                    <Typography className='bottom_box_texture' style={{marginLeft:"2px",fontFamily: "CreatoDisplay",fontSize: "26px",color:"white"}}>
                        At the beginning of the series, little is known about Rei and her stoic personality puzzles her peers. As the series progresses, her personality evolves and she becomes more involved with the people around her, particularly her classmate and fellow Eva pilot Shinji Ikari. 
                    </Typography>
                </Grid>
            </Grid>

       </Grid>

        
    </ThemeProvider>
    {/* <header className='flexForComponents'>
        <div className='mainPost'>
            <div className='container'>
                <div className='row m-3'>
                    <div className='col'>Post</div>
                    <div className='col'>ass</div>
                </div>
            </div>
        </div>
    </header> */}
    </>
}
