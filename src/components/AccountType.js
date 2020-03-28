import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../App.css'

const theme = createMuiTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: 'rgb(54, 181, 212)',
      },
      primary: {
        // This is green.A700 as hex.
        main: 'rgba(41, 40, 40, 0.699)',
      }, 
    },
  });

const useStyle= makeStyles (theme =>({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        
        textAlign: 'center',
        color:'rgb(54, 181, 212)',
        backgroundColor:'rgb(82, 90, 117)',
      },
    h1:{
        color:'rgb(54, 181, 212)',
        textAlign:'center',

    },
    button:{
        padding:'4px 80px',
        fontSize:'15px',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:'20px',
        marginTop:'40px',   
        marginBottom:'40px',
        border:'1px solid rgb(54, 181, 212)',
        
    },
    Link:{
        color:'white',
        textAlign: 'center',
        textDecoration:'none',
        display:'block',
       
      },
}));

const AccountType = () => {
    const classes=useStyle();
   
    return(
    
    <Container className={classes.root} maxWidth="sm">
    <ThemeProvider theme={theme}>
     <h1 className={classes.h1}>Choose Account Type</h1>
     <Grid container spacing={10}>
        <Grid item xs>
          <Paper className={classes.paper}>
              <h2>Basic Account</h2>
              <ol>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
              </ol>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
              <h2>Premium Account</h2>
              <ol style={{textUnderline:'none'}}>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
                  <li><a href="/"> Feature 1</a></li>
              </ol>
          </Paper>

        </Grid>
    </Grid>
    <Button  variant="contained" color="secondary" className={classes.button} ><a href="/CreateVote" style={{textDecoration:'none'}}>Finish</a> </Button> 
    <a href="/Login" className={classes.Link}>Already have an account? Sign in here </a>
    </ThemeProvider>
    </Container>
    )
}
export default AccountType;