import React from 'react';
import clsx from 'clsx';
import { makeStyles,fade,ThemeProvider, withStyles,createMuiTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Slider from '@material-ui/core/Slider';
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
  root1: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 200,
    backgroundColor:'rgba(4, 6, 8, 0.699)',
    marginLeft:'25%',
    
  },
  input1: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color:'white',
  },
  iconButton: {
    padding: 10,
    color:'white',
  },
  divider: {
    height: 28,
    margin: 4,
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

  },
  input:{
    marginLeft:'20px',
  },
  position:{
    width:'100%',
    padding:'10px 0',
    margin:'8px 0',
  },
  Button:{
    borderRadius:'30px',
    padding:'10px 20px',
  },
  iconNotification:{
    color:'white',
    marginLeft:'30%',
  },
  Avatar:{
    marginLeft:'30px',
  },
  root3: {
    flexGrow: 1,
  },
 
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
    default: {
      // This is green.A700 as hex.
      main:'rgb(55, 46, 134)',
    }, 
  },
});
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

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
          <Paper component="form" className={classes.root1}>
          <InputBase
            className={classes.input1}
            placeholder="Searching"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <IconButton className={classes.iconNotification} aria-label="search">
            <Notifications />
        </IconButton>
        <div className={classes.Avatar1}>
        <Avatar alt="Remy Sharp" src=""  className={classes.Avatar}/>
        <span>Mugorozi Francois</span>
        </div>
      
         
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
        <div className={classes.root3}>
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
              <h2>Basic Account</h2>
              <Typography gutterBottom>pretto.fr</Typography>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
          </Paper>
        </Grid>
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
       </Grid>
  
            </div>
      
      </main>
      </ThemeProvider>
    </div>
  );
}
