import React from 'react'
import {homeStyles} from '../styles/HomeStyles'

import { Button, Paper } from '@material-ui/core'
import {PersonRounded, HomeRounded, WorkRounded, LocalPhoneRounded} from '@mui/icons-material';

const Menu = () => {
    const classes = homeStyles() 
    return (
        <Paper 
        elevation={3} 
        className={classes.menu}
        >
            <Button href="/">
                <HomeRounded />
            </Button>
            <Button href="/about">
                <PersonRounded />
            </Button>
            <Button href="/work-experience">
                <WorkRounded />
            </Button>
            <Button href="/contact">
                <LocalPhoneRounded />
            </Button>
        </Paper>
    )
}
export default Menu