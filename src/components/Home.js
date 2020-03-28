import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Image1  from './images/Image_1.png'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
// import DeleteIcon from '@material-ui/icons/Delete'




const theme = createMuiTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: 'rgb(54, 181, 212);',
      },
    },
  });
const useStyle=makeStyles({
    root:{
        textAlign:'center',
        padding: '0 40%',
        fontSize:'30px',

    },
    firstImage:{
        maxWidth:'100%',
        height:'auto',
        width:'200px',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',

    },
    container:{
        textAlign:'center',
        padding: '0 30px',
        fontFamily:'arial',
        color:'rgb(54, 181, 212)',
        fontSize:'40px',
        
    },
    button:{
        padding:'4px 80px',
        fontSize:'15px',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:'20px',
        marginTop:'30px',
        
    },
   
})

const Home = () => {
    const classes=useStyle();
    return(
        <div>
            <ThemeProvider theme={theme}>               
            <section>
                <img alt='robo' src={Image1} className={classes.root} className={classes.firstImage} />
                <h1 className={classes.container}> Run any election in your sitting!</h1>
                <Link to="/Login" style={{textDecoration:'none'}}>
                    <Button  variant="contained" color="secondary" className={classes.button} > Get Started</Button> 
                </Link>
            </section>
            </ThemeProvider>
        </div>
    )
}
export default Home;