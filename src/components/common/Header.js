import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { Menu, Close } from '@material-ui/icons';
import { Hidden } from '@material-ui/core';
import { headerStyle } from '../../config/styles';
import Signup from '../Signup';
import Login from '../Login';
import SideMenu from './SideMenu';

import logo from '../../resources/img/SoftclikLogo.png';
import Profile from './Profile';

const styles = (theme) => headerStyle(theme);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      signup: false,
      drawer: false,
      opened: false,
    };
  }

  openSignup = () => {
    this.setState({ signup: true });
  };
  openLogin = () => {
    this.setState({ login: true });
  };
  handleClose = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    this.setState({ drawer: false });
  };
  openDrawer = () => {
    this.setState({ drawer: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar color='primary' position='fixed'>
          <Toolbar>
            <Grid container wrap='nowrap' alignItems='center'>
              <Hidden mdUp>
                <Grid item sm alignItems='center'>
                  {this.props.user ? (
                    <IconButton onClick={this.openDrawer}>
                      <Menu />
                    </IconButton>
                  ) : null}
                </Grid>
              </Hidden>
              <Grid item sm container justify='center' alignItems='center'>
                <Link to='/'>
                  <img src={logo} alt='Softvote' className={classes.logo} />
                </Link>
              </Grid>
              <Hidden mdDown>
                <Grid item sm justify='flex-end' container alignItems='center'>
                  {this.props.user ? (
                    <Profile user={this.props.user.data} />
                  ) : (
                    <Hidden mdDown>
                      <Button
                        variant='contained'
                        color='secondary'
                        className={classes.authButtons}
                        onClick={this.openLogin}>
                        Login
                      </Button>
                      <Button
                        variant='contained'
                        color='secondary'
                        className={classes.authButtons}
                        onClick={this.openSignup}>
                        Signup
                      </Button>
                    </Hidden>
                  )}
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
        {this.state.signup ? <Signup route={false} /> : ''}
        {this.state.login ? <Login route={false} /> : ''}

        {/* sidebar Drawer */}
        <Hidden mdUp>
          <Drawer open={this.state.drawer} onKeyDown={this.handleClose}>
            <Grid container justify='flex-end'>
              <IconButton onClick={this.handleClose}>
                <Close />
              </IconButton>
            </Grid>
            <SideMenu mobile={true} />
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default withStyles(styles)(connect(mapStateToProps)(Header));
