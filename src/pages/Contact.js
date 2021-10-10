import React from 'react'
import {contactStyles} from '../styles/ContactStyles'
import Menu from '../components/Menu'

function Contact() {
    const classes = contactStyles()
    return (
        <div className={classes.background}>
            <div className={classes.top}>
                <div className={classes.menu_container}>
                    <Menu />
                </div>
            </div>
            <div className={classes.mid}>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Contact
