import { Button, Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
    var isAuth = useSelector((state:any)=>state.user.isAuth);

    const handle=()=>{
        if(isAuth)
            navigate("/user/posts");
        else
        navigate("/login");
    }

  return (
    <>
        <Grid container justifyContent="center" alignContent="center" marginTop="20%">
            <Button onClick={handle}>
                Return to posts
            </Button>
        </Grid>
    </>
  )
}

export default NotFound