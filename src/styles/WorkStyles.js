import React from 'react'
import {makeStyles} from '@material-ui/core'

const workStyles = makeStyles(()=>({
background:{
    width: '100vw',
    height: '100vh',
    backgroundColor: '#80B192',
    display: 'flex',
    flexDirection: 'column'
},
top:{
    flexBasis: '20%'
},
menu_container:{
    width: '100%',
    height: '100%'
},
}));

export { workStyles }