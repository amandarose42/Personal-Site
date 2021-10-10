import React from 'react'
import Menu from '../components/Menu'
import {aboutStyles} from '../styles/AboutStyles'

function About() {
    const classes = aboutStyles()
    return (
        <div className={classes.background}>
            <div className={classes.top}>
                <div className={classes.menu_container}>
                    <Menu />
                </div>
            </div>

            
        </div>
    )
}

export default About
