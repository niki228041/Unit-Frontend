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
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { RemoveTokens } from '../api/jwtDecodeToken'
import { useDispatch } from 'react-redux'
import { AuthUser } from '../features/user/user-slice'
import { useSelector } from 'react-redux'

function RightMenu() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId:any = useSelector((state:any)=>state.user.user.Id);

  const LogOut=()=>{
      dispatch(AuthUser(""));
      RemoveTokens();

      navigate("/login");
  }


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
                    <Link to={"profile/" + userId} style={{width:"100%",height:"100%",alignItems:"center",display:"flex"}}>
                        Profile
                    </Link>
                </Grid>
            </Grid>
            <Grid xs={1.8} item container>
                <Grid xs={3} item container justifyContent="center" alignContent="center">
                    <img src={home} style={{height:"20px"}}></img>
                </Grid>
                <Grid xs={9}  className='choise_settings_texture' item container justifyContent="flex-start" alignContent="center" style={{color:"white",fontSize:"14px"}}>
                    <Link to="posts" style={{width:"100%",height:"100%",alignItems:"center",display:"flex"}}>
                        Home
                    </Link>
                </Grid>
            </Grid>

            <Grid xs={1.8} item container>
                <Grid xs={3} item container justifyContent="center" alignContent="center">
                    <img src={chat} style={{height:"20px"}}></img>
                </Grid>
                <Grid xs={9} className='choise_settings_texture' item container justifyContent="flex-start" alignContent="center" style={{color:"white",fontSize:"14px"}}>
                    <Link to="chat" style={{width:"100%",height:"100%",alignItems:"center",display:"flex"}}>
                        Chat
                    </Link>
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
                    <div style={{width:"100%",height:"100%",alignItems:"center",display:"flex"}} onClick={LogOut}>
                        Log Out
                    </div>
                </Grid>
            </Grid>

        </Grid>
    </Grid>
  )
}

RightMenu.propTypes = {}

export default RightMenu
