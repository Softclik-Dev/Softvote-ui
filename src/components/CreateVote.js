import React from 'react';
import clsx from 'clsx';
import { makeStyles,fade,ThemeProvider, withStyles,createMuiTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),

    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor:'rgb(55, 68, 83)',
    border: '1px solid rgb(54, 181, 212)',
    fontSize: 16,
    color:'white',
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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  h3:{
    color:'rgb(83, 83, 83)',
  },
  margin:{
    color:'rgb(55, 46, 134)',

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
      main: 'rgb(36, 36, 48)',
    }, 
  },
});

export default function CreateVote() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap color="secondary"> 
            Softvote
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
        <Typography paragraph>
        <Container maxWidth="md">
        <h3 className={classes.h3}>CREATE VOTE</h3>
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <FormControl className={classes.margin} >
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.margin}>
              Enter the name of the company/Institutionn
            </InputLabel>
            <BootstrapInput  id="bootstrap-input"  />
          </FormControl>
          <br></br>
          <br></br>
        <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.Signin}>
              Enter the name of the vote
            </InputLabel>
            <BootstrapInput  id="bootstrap-input" type="password" />
          </FormControl>
          <br></br>
          <br></br>
        <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.Signin}>
              Enter description of the vote
            </InputLabel>
            <BootstrapInput id="bootstrap-input" type="password" />
          </FormControl>
        </Grid>
            <Grid item xs={6}>
            <FormControl className={classes.margin} color="primary">
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.Signin}>
              UserName
            </InputLabel>
            <BootstrapInput id="bootstrap-input"  />
          </FormControl>
          <br></br>
          <br></br>
        <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.Signin}>
              Password
            </InputLabel>
            <BootstrapInput id="bootstrap-input" type="password" />
          </FormControl>
          <br></br>
          <br></br>
        <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.Signin}>
              Password
            </InputLabel>
            <BootstrapInput  id="bootstrap-input" type="password" />
          </FormControl>
            </Grid>
        </Grid>
    </Container>
        </Typography>
      </main>
      </ThemeProvider>
    </div>
  );
}
