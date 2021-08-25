import React from 'react'
import {makeStyles} from '@material-ui/core'

const homeStyles = makeStyles(()=>({
container: {
    backgroundColor: '#182825',
    width: '100vw',
    height: '100vh',
},
layout: {
    margin: 'auto',
    height: '100vh',
    width: '75vw',
    backgroundColor: '#FBF5F3',
    display: 'flex',
    flexDirection: 'column'
},
top_row: {
    flexBasis: '35%',
    borderBottom: '1px solid black',
    display:'flex',
    justifyContent:'space-around'
},
mid_row: {
    flexBasis: '55%',
    borderBottom: '1px solid black',
},
bottom_row: {
    flexBasis: '20%',
},
img_top: {
    width: '250px',
    height: '300px',
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft : '15px'
},
quotes : {
    margin: 'auto',
}
}));

export { homeStyles }