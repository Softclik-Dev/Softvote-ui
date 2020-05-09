import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Dashboard,
  AccountCircle,
  PowerOff,
  Settings,
  HowToVote,
} from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { sidebarStyle } from '../../config/styles';
import logout from '../../resources/js/logout';


const styles = (theme) => sidebarStyle(theme);

export class SideMenu extends Component {

  handleLogout = () => logout();

  render() {
    const { classes } = this.props;

    return this.props.user ? (
      <Grid
        container
        className={
          this.props.mobile ? classes.mobSidebar : classes.mainSidebar
        }>
        <List style={{ width: '100%' }}>
          <ListItem component={Link} to='/profile'>
            <Grid
              container
              justify='center'
              direction='column'
              style={{ padding: '40px 0' }}>
              <Grid item container justify='center'>
                <img
                  src={this.props.user.data.photo}
                  alt=''
                  className={classes.userPhoto}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  align='center'
                  color='textSecondary'>
                  {this.props.user.data.userName}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem
            className={classes.listItem}
            component={Link}
            to='/dashboard'>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='body2'>Dashboard</Typography>
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listItem} component={Link} to='/votings'>
            <ListItemIcon>
              <HowToVote />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='body2'>Votings</Typography>
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listItem} component={Link} to='/account'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='body2'>Account</Typography>
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listItem} component={Link} to='/profile'>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='body2'>Profile</Typography>
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listItem} onClick={this.handleLogout}>
            <ListItemIcon>
              <PowerOff />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='body2'>Logout</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    ) : null;
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default withStyles(styles)(connect(mapStateToProps)(SideMenu));
