import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import Menu from '../components/Menu'
import {aboutStyles} from '../styles/AboutStyles'
import {OutsideImages} from '../components/ImageLists'

function About() {
    const classes = aboutStyles()
    return (
        <div className={classes.background}>
            <div className={classes.top}>
                <div className={classes.menu_container}>
                    <Menu />
                </div>
            </div>

            <div className={classes.mid}>
                <div>
                    <Paper
                    elevation={3}
                    className={classes.mid_paper}>
                        <div className={classes.outside_images}>
                            <Typography
                            variant='h5'
                            align='left'>Photos of the Outdoors</Typography>
                            <OutsideImages />
                        </div>
                        <div className={classes.img_desc}>
                            <Typography
                            variant="h6"
                            align="left">
                                On my free time, I like to take in the view. Whether it be by the beach or with friends, 
                                capturing beautiful moments always help capture beatiful memories. To give you a feel of 
                                where I've been, here are some photos seen through my lense. <br/><br/>
                            </Typography>
                            <Typography
                            variant='h6'
                            align='left'>
                                <strong>Photos of the Outdoors</strong>
                            </Typography>
                            <Typography
                            variant="body1"
                            align="left">
                            <ul>
                                <li>Towards Weaverville, CA</li>
                                <li>Lighthouse Near Crescent City Jetties, CA</li>
                                <li>Glass Beach in Fort Bragg, CA</li>
                                <li>Through The Canyon Near Lake Isabella, CA</li>
                                <li>Wofford Heights, CA</li>
                                <li>Moonstone Beach, CA</li>
                                <li>Trinidad, CA</li>
                            </ul>
                            </Typography>
                        </div>
                    </Paper>
                </div>
            </div>            
        </div>
    )
}

export default About
