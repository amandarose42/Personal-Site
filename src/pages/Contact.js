import React from 'react'
import {contactStyles} from '../styles/ContactStyles'

function Contact() {
    const classes = contactStyles()
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

export default Contact
