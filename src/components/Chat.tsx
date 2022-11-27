import React from 'react'
import { Grid, Input } from '@mui/material'
import ava from '../Images/ava.png'
import send from '../Images/senden.png'

function Chat() {
  return (
    <Grid item container direction="column" padding={2} className="chat" justifyContent="end">
        <Grid xs={10.5} item container direction="row" padding={0.2}>
            <Grid xs={3} item container style={{background:"#121215"}} borderRadius={3} direction="column" padding={1} >
                <Grid className='chats' xs={1.5} item container borderRadius={3} direction="row" alignContent="center" padding={1}>
                    <Grid item xs={3}>
                        <img src={ava} style={{height:"60px"}}></img>
                    </Grid>
                    <Grid item xs={8} marginTop="20px" marginLeft={2}>
                        #chat daunow
                    </Grid>
                </Grid>
                <Grid className='chats' xs={1.5} item container borderRadius={3} marginTop={1}>

                </Grid>
                <Grid className='chats' xs={1.5} item container borderRadius={3} marginTop={1}>

                </Grid>
                <Grid className='chats' xs={1.5} item container borderRadius={3} marginTop={1}>

                </Grid>
            </Grid>
            <Grid xs={8.8} item container sx={{ ml:2 }} style={{background:"#121215"}} borderRadius={3} direction="column" padding={1} justifyContent="end">
                <Grid xs={1.5} item container style={{background:"#605b83"}} borderRadius={3} alignContent="center" direction="row" padding={1}>

                    <Grid xs={0.8} item container className='sendMessage' style={{background:"#605bb2"}} justifyContent="center" padding={1} borderRadius={3}>
                        <img src={send} style={{height:"24px",marginRight:"3px",marginTop:"3px"}}></img>
                    </Grid>
                    
                    <Grid xs={11} item padding={1}>
                        <Input style={{width:"90%",fontFamily: "CreatoDisplay",marginLeft:"10px"}}></Input>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Chat
