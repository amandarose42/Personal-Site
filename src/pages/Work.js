import React from 'react'
import Menu from '../components/Menu'
import {workStyles} from '../styles/WorkStyles'

function Work() {
    const classes = workStyles()
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

export default Work
