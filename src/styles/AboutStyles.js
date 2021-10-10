import React from 'react'
import {makeStyles} from '@material-ui/core'

const aboutStyles = makeStyles(()=>({
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
mid:{
    flexBasis: '80%'
},
mid_paper:{
    width: '95%', 
    height: 'auto',
    margin: 'auto',
    marginTop: '-25px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
outside_images:{
    marginLeft: 15,
    marginTop: 15,
    flexBasis: '50%'
},
img_desc:{
    marginRight: 15,
    marginLeft: 15,
    marginTop:15,
    flexBasis: '50%'
}
}));

export { aboutStyles }