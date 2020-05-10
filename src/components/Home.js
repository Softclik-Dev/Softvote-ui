import React, { Component } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import homeImage from '../resources/img/vote.JPG';
import { homeStyle } from '../config/styles';
import Signup from './Signup';
import Login from './Login';

const styles = (theme) => homeStyle(theme);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  openSignup = () => {
    this.setState({ signup: true });
  };
  openLogin = () => {
    this.setState({ login: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          justify='center'
          alignItems='center'
          spacing={4}
          className={classes.main}>
          <Grid item sm={12} md={6}>
            <img src={homeImage} alt='' className={classes.homeImg} />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            container
            justify='center'
            alignItems='center'
            className={classes.content}>
            <Typography variant='h4' color='secondary' align='center'>
              Run Election in Realtime
            </Typography>
            <Typography variant='body2' color='secondary' align='center'>
              Softvote make it easy to make any kind of voting on cloud, create
              a voting with information once you lounch the election, anyone
              with link start voting and get realtime result. Isn't that easy?
            </Typography>

            {!this.props.user ? (
              <Grid container justify='center'>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={this.openSignup}
                  className={classes.authButtons}>
                  Signup
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={this.openLogin}
                  className={classes.authButtons}>
                  Login
                </Button>
              </Grid>
            ) : (
              <Button
                variant='contained'
                color='secondary'
                component={Link}
                to='/dashboard'
                className={classes.getStarted}>
                Get Started
              </Button>
            )}
          </Grid>
        </Grid>
        {this.state.signup ? <Signup route={false} /> : ''}
        {this.state.login ? <Login route={false} /> : ''}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default withStyles(styles)(connect(mapStateToProps)(Home));
