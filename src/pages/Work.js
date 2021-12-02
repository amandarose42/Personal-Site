import React from 'react'
import Menu from '../components/Menu'
import {workStyles} from '../styles/WorkStyles'
import { Paper, Typography } from '@material-ui/core'

function Work() {
    const classes = workStyles()
    return (
        <div className={classes.background}>
            <div className={classes.top}>
                <div className={classes.menu_container}>
                    <Menu />
                </div>
            </div>
            <div className={classes.mid}>
                <Paper
                elevation={3}
                className={classes.mid_paper}>
                    <Typography variant='overline'>Education</Typography>
                </Paper>
            </div>
            <div className={classes.bot}>
                footer
            </div>
        </div>
    )
}

export default Work
