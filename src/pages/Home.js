import { Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import {homeStyles} from '../styles/HomeStyles';

function Home() {
    const classes = homeStyles();
    const quotesLink = 'https://zenquotes.io/api/quotes'
    const [quotes, setQuotes] = useState([])

    useEffect(()=>{
        getQuotes(quotesLink)
    },[])

    function getQuotes (link) {
        return fetch(link)
        .then((response)=> response.json())
        .then((json)=>{
            setQuotes(json)
            console.log(json)
        })
    }
    return (
        <div className={classes.container}>
            <div className={classes.layout}>
                <div className={classes.top_row}>
                    <div className={classes.img_top}>
                        <img src={window.location.origin +'/self-img.jpg'} style={{width: '100%',height: '100%',borderRadius: '50%',}}/>
                    </div>
                    <div className={classes.quotes}>
                        <Typography>Quotes Here!</Typography>
                    </div>
                </div>
                <div className={classes.mid_row}>
                </div>
                <div className={classes.bottom_row}>
f
                </div>
            </div>
        </div>
    )
}

export default Home
