import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toobar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: 'rgb(54, 181, 212);',
      },
    },
  });

const NavBar = () => {
    return(
        <div>
            <ThemeProvider theme={theme}>
                <AppBar position="static" ClassName="AppBar" color="transparent">
                    <Toobar >
                        <Typography variant="title" color="secondary" >
                           <h2>SoftVote</h2> 
                        </Typography>
                    </Toobar>
                </AppBar>
            </ThemeProvider>
           
        </div>
    )
}
export default NavBar;