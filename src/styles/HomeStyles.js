import React from 'react'
import {makeStyles} from '@material-ui/core'

const homeStyles = makeStyles(()=>({
container: {
    backgroundColor: '#80B192',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
},
top:{
    flexBasis: '20%'
},
mid:{
    flexBasis: '60%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around'
},
bot:{
    flexBasis: '20%',
    margin: '25px'
},
menu_container:{
    width: '100%',
    height: '100%'
},
menu:{
  backgroundColor: '#FFFBFA',
  width: '50%',
  height: '35%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: 35, 
},
profile_pic :{
    width: '25%',
    display: 'flex',
    marginLeft: '35px',
    border: '1px groove white',
    borderRadius: '0px',
    flexBasis: '25%'
},
about_me: {
    flexBasis: '60%',
    width: '80%',
    border: '1px groove white',
    borderRadius: '0px',
},
bio: {
    margin: '15px',
},
prev_hist: {
    backgroundColor: '#468189',
    color: 'white',
    '&:hover' : {
        backgroundColor: '#9DBEBB',
        color: 'black',
    }
},
bottom_typ: {
    width: '95%',
    height: '100%',
    margin:'auto',
    marginLeft: '50px',
    border: '1px groove white',
    borderRadius: '0px'
}
}));

export { homeStyles }