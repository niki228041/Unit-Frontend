import React from 'react'
import { Grid, Input } from '@mui/material'

import send from '../Images/senden.png'

function Chat() {
  return (
    <Grid item container direction="column" padding={2} className="chat" justifyContent="end">
        <Grid xs={10.5} item container direction="row" padding={0.2}>
            <Grid xs={3} item container style={{background:"#121215"}} borderRadius={3} direction="column" padding={1}>
                <Grid xs={1.5} item container style={{background:"#605b83"}} borderRadius={3}>

                </Grid>
                <Grid xs={1.5} item container style={{background:"#605b83"}} borderRadius={3} marginTop={1}>

                </Grid>
                <Grid xs={1.5} item container style={{background:"#605b83"}} borderRadius={3} marginTop={1}>

                </Grid>
                <Grid xs={1.5} item container style={{background:"#605b83"}} borderRadius={3} marginTop={1}>

                </Grid>
            </Grid>
            <Grid xs={8.8} item container sx={{ ml:2 }} style={{background:"#121215"}} borderRadius={3} direction="column" padding={1} justifyContent="end">
                <Grid xs={1.5} item container style={{background:"#605b83"}} borderRadius={3} alignContent="center">
                    <Grid>
                        <img src={send} style={{height:"30px"}}></img>
                    </Grid>
                    <Grid>
                        <Input style={{width:"100%"}}></Input>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Chat
