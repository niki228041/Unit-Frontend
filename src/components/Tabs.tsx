import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from './Navbar'
import { MainPost } from './MainPost'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Grid } from '@mui/material'
import choise from '../Images/NotChoised.png'
import Chat from './Chat'

import { Outlet } from 'react-router-dom'
// (window.location.pathname);

function Tabs() {
  return (
    <>
        {/* <div className='flexForComponents'> */}
            <Grid container direction="row" >
                <Grid xs={2.5} item  marginTop={12}>
                    <LeftMenu/>
                </Grid>
                <Grid xs={7.5}  item container direction="column" justifyContent="flex-start" alignContent="center">
                    <Grid style={{height:"100px"}} item container>
                        <Grid item container style={{color:"white"}}  alignContent="flex-end" justifyContent="flex-start" marginBottom="10px">
                            <Grid className='homeOrForYouOption' container item xs={1.3} justifyContent="center" style={{fontSize:"14px"}}>
                                <img src={choise} style={{height:"3px",marginBottom:"10px"}} ></img>
                                HOME
                            </Grid>
                            <Grid className='homeOrForYouOption' container item xs={1.3} justifyContent="center" style={{fontSize:"14px",marginLeft:"10px"}}>
                                <img src={choise} style={{height:"3px",marginBottom:"10px"}} ></img>
                                FOR YOU
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item>
                        <MainPost/>
                    </Grid> */}
                    <Outlet/>
                    

                </Grid>
                <Grid xs={1.5} item>
                    <RightMenu/>
                </Grid>
            </Grid>
        
        {/* </div> */}
    </>
  )
}

export default Tabs
