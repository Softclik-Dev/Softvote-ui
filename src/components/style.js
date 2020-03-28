import { createMuiTheme, makeStyles } from '@material-ui/core/styles';



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
        fontSize:'20px',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:'20px',
        marginTop:'30px',
        
    },
    footer:{
        bottom:'0',
        position:'fixed',
        width:'100%',
        left:'0',
        color:'rgb(118, 122, 122)',
        textAlign:'center',
        paddingBottom:'10px',
        
    },
})