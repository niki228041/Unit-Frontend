import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import button_img from '../Images/Button.png'

function LeftMenu() {
  return (
    <div className='leftMenu'>
        <Grid item container direction="column" padding={2}>
            <Grid className='button_img fs-3' style={{cursor:"default"}} padding={2}>
                Create New Post
            </Grid>
        </Grid>
    </div>
  )
}

export default LeftMenu
