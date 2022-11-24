import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

import profile from "../Images/profile.png"
import home from "../Images/home.png"
import chat from "../Images/chat.png"
import shop from "../Images/shop.png"
import settings from "../Images/settings.png"
import logOut from "../Images/exit.png"
import ava from "../Images/ava.png"


function RightMenu() {
  return (
    <Grid container className='rightMenuSettings' direction="column">
        <Grid xs={2.6} item container direction="row">
            <Grid xs={5} item container alignContent="center" justifyContent="center">
                <img src={ava} style={{height:"70px"}}></img>
            </Grid>
            <Grid xs={7} item container alignContent="center" style={{color:"white"}}>
                #niki228041
            </Grid>
        </Grid>
        <Grid xs={9.4} item container direction="column">
            <Grid xs={1.8} item container marginTop="20px">
                <Grid xs={3} item container justifyContent="center" alignContent="center">
                    <img src={profile} style={{height:"20px"}}></img>
                </Grid>
                <Grid xs={9} className='choise_settings_texture' item container justifyContent="flex-start" alignContent="center" style={{color:"white",fontSize:"14px"}}>
                    <Grid item>
                        Profile
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={1.8} item container>
                <Grid xs={3} item container justifyContent="center" alignContent="center">
                    <img src={home} style={{height:"20px"}}></img>
                </Grid>
                <Grid xs={9}  className='choise_settings_texture' item container justifyContent="flex-start" alignContent="center" style={{color:"white",fontSize:"14px"}}>
                    <Grid item>
                        Home
                    </Grid>
                </Grid>
            </Grid>

            <Grid xs={1.8} item container>
                <Grid xs={3} item container justifyContent="center" alignContent="center">
                    <img src={chat} style={{height:"20px"}}></img>
                </Grid>
                <Grid xs={9} className='choise_settings_texture' item container justifyContent="flex-start" alignContent="center" style={{color:"white",fontSize:"14px"}}>
                    <Grid item>
                        Chat
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={1.8} item container>
                <Grid xs={3} item container justifyContent="center" alignContent="center">
                    <img src={shop} style={{height:"20px"}}></img>
                </Grid>
                <Grid xs={9} className='choise_settings_texture' item container justifyContent="flex-start" alignContent="center" style={{color:"white",fontSize:"14px"}}>
                    <Grid item>
                        Shop
                    </Grid>
                </Grid>
            </Grid>


            <Grid xs={1.8} item container>
                <Grid xs={3} item container justifyContent="center" alignContent="center">
                    <img src={settings} style={{height:"20px"}}></img>
                </Grid>
                <Grid xs={9} className='choise_settings_texture' item container justifyContent="flex-start" alignContent="center" style={{color:"white",fontSize:"14px"}}>
                    <Grid item>
                        Settings
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={1.8} item container>
                <Grid xs={3} item container justifyContent="center" alignContent="center">
                    <img src={logOut} style={{height:"20px"}}></img>
                </Grid>
                <Grid xs={9} className='choise_settings_texture' item container justifyContent="flex-start" alignContent="center" style={{color:"white",fontSize:"14px"}}>
                    <Grid item>
                        Log Out
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    </Grid>
  )
}

RightMenu.propTypes = {}

export default RightMenu
