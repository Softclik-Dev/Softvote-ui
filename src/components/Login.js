import React from 'react';
import {fade,ThemeProvider, withStyles, makeStyles, createMuiTheme} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
 
import FormControl from '@material-ui/core/FormControl';
 
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Googlelogo from './images/com.google.png';
const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),

    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid rgb(54, 181, 212)',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(5),
    
  },
  Signin:{
    textAlign:'center',
    color:'rgb(54, 181, 212)',
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
Googlelogo:{
  maxWidth:'20px',
  height:'auto',

  

},
Link:{
  color:'white',
  textAlign: 'center',
  textDecoration:'none',
  display:'block',
 
},
button_2:{
  color:'white',
  marginLeft:'20px',
}


}));


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

export default function Login() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
      <h1 className={classes.Signin}>SIGN IN</h1>
        <form className={classes.root} noValidate>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.Signin}>
              UserName
            </InputLabel>
            <BootstrapInput placeholder="username" id="bootstrap-input" />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.Signin}>
              Password
            </InputLabel>
            <BootstrapInput placeholder="........." id="bootstrap-input" type="password" />
          </FormControl>
        </form>
        <Link to="/" style={{textDecoration:'none'}}>
            <Button  variant="contained" color="secondary" className={classes.button} > Sign In</Button> 
        </Link>
        <Link to="/" style={{textDecoration:'none'}}>
            <Button  variant="contained" color="primary" className={classes.button} ><span><img src={Googlelogo} className={classes.Googlelogo}/></span><span className={classes.button_2}>Sign In with Google</span></Button> 
        </Link>

        <a href="/Register" className={classes.Link}>Don't have account? Get your free username here </a>
 
          
      </ThemeProvider>
    </Container>
   
  );
}

