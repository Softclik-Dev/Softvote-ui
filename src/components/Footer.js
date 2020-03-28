import React from 'react';
// import TableFooter from '@material-ui/core/TableFooter'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css'
const useStyle=makeStyles({
   
    footer:{
        bottom:'0',
        position:'static',
        width:'100% !important',
        left:'0',
        color:'rgb(118, 122, 122)',
        textAlign:'center',
        paddingBottom:'10px',
        background:'rgb(36, 36, 48)',
        
    },
    hr:{
        backgroundColor:'rgb(56, 55, 55)',
        
    }
})


 const Footer = () =>{
    const classes=useStyle();
     return(
        <Box mt={8} className={classes.footer}>
         <hr className={classes.hr}></hr>
            Copywrite. All right Reserved. Powered by Softclick
      </Box>
       
     );
 
 }
 export default Footer;