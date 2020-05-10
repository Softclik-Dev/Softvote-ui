import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import {
  Typography,
  Hidden,
  IconButton,
  Link,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { homeFooterStyle } from '../../config/styles';

import { LinkedIn, Twitter, Facebook, Email } from '@material-ui/icons';

const styles = (theme) => homeFooterStyle(theme);

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar color='primary' position='fixed' className={classes.homeFooter}>
        <Toolbar>
          <Grid container justify='center' alignItems='center'>
            <Grid item sm container justify='center' alignItems='center'>
              <Link href='https://www.linkedin.com/softclik' target='_blank'>
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </Link>

              <Link href='https://www.twitter.com/softclik' target='_blank'>
                <IconButton>
                  <Twitter />
                </IconButton>
              </Link>

              <Link href='https://fb.me/softclik' target='_blank'>
                <IconButton>
                  <Facebook />
                </IconButton>
              </Link>

              <Link href='mailto:info.softclik@gmail.com' target='_blank'>
                <IconButton>
                  <Email />
                </IconButton>
              </Link>
            </Grid>
            <Grid item sm justify='center' container alignItems='center'>
              <Hidden mdDown>
                <Typography variant='h5' color='secondary'>
                  Softvote
                </Typography>
              </Hidden>
            </Grid>
            <Grid item sm justify='flex-end' container alignItems='center'>
              <Typography variant='body2' color='textSecondary' align='center'>
                Copywrite &copy; Allright Reserved, Powered by{' '}
                <a href='www.softclik.com' className={classes.footerLink}>
                  Softclik
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
