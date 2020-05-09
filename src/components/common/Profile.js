import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Fade } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { profileStyle } from '../../config/styles';
import logout from '../../resources/js/logout';

const styles = (theme) => profileStyle(theme);

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      open: false,
    };
  }

  toggleProfileMenu = () => {
    this.setState({ open: !this.state.open });
  };

  handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      this.setState({ open: false });
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogout = () => logout();

  render() {
    const { classes } = this.props;
    return (
      <Grid>
        <img
          src={this.props.user.photo}
          alt={this.props.user.userName}
          className={classes.userPhoto}
          onClick={this.toggleProfileMenu}
        />
        <Popper
          open={this.state.open}
          transition
          placement='bottom-end'
          style={{ right: 0, width: 200, top: 60, left: 'auto' }}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList
                    autoFocusItem={this.state.open}
                    id='menu-list-graw'
                    onKeyDown={this.handleListKeyDown}>
                    <MenuItem>
                      <Link to='/profile' className={classes.menuLink}>
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to='/dashboard' className={classes.menuLink}>
                        My account
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Grid>
    );
  }
}

export default withStyles(styles)(profile);
