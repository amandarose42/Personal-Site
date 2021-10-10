import React from 'react'
import profilePic from '../pictures/profile_pic.jpg'
import {homeStyles} from '../styles/HomeStyles'
import { Button, Paper, Typography } from '@material-ui/core'
import {PersonRounded, HomeRounded, WorkRounded, LocalPhoneRounded} from '@mui/icons-material';
import Menu from '../components/Menu'

function Home() {
    const classes = homeStyles();
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.menu_container}>
                    <Menu />
                </div>
            </div>
            <div className={classes.mid}>
                <Paper
                elevation={3}
                className={classes.profile_pic}
                >
                    <img src={profilePic} width='100%' height='100%'/>
                </Paper>
                <Paper
                elevation={3}
                className={classes.about_me}>
                    <div className={classes.bio}>
                        <Typography
                        variant="body1"
                        align="left"
                        >   
                        Welcome! My name is Amanda Rose Ortiz. I currently reside in Humboldt County, where I work with a small
                        local business as a Software/Web Developer. 
                        <br/><br/>
                        I graduated from Humboldt State University in December of 2020, in the midst of the COVID-19 Pandemic, with a Bachelor's Degree
                        in Computer Science. Since graduating, I have been working and improving on I.T. knowledge and developing skills with 
                        many languages. 
                        <br/><br/>
                        A current project that I am working on is creating a Mobile Application, Admin Web Application, and Public Website for a local 
                        group in Humboldt County. We are working with AWS, React Native, React, and Wordpress. 
                        <br/>
                        Previous Projects I have done is create custom software for clients, update and design websites, and update and maintain previous 
                        applications.
                        <br/><br/>
                        Before working with Biztech, my work history consisted of customer service, housekeeping, and call center experience. 
                        </Typography>
                        <Button
                        className={classes.prev_hist}
                        variant="contained"
                        align="left"
                        >Previous Work History</Button>
                    </div>
                </Paper>
            </div>
            <div className={classes.bot}>
                <Paper
                className={classes.bottom_typ}>

                </Paper>
            </div>
        </div>
    )
}

export default Home
