import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  Typography,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  InputAdornment,
  IconButton,
  Grid,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import { Email, VisibilityOff, Visibility } from '@material-ui/icons';
import axios from 'axios';
import URLs from '../config/URLs';
import GoogleLogo from '../resources/img/googleLogo.png';
import Message from './Message';
import { authStyles } from '../config/styles';

const styles = (theme) => authStyles(theme);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errorMsg: '',
      msg: false,
      message: '',
      open: true,
      status: 'success',
      showPassword: false,
      ...props,
      loading: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showError = (msg) => {
    this.setState({ errorMsg: msg });
  };

  checkRequired = () => {
    if (this.state.email === '' || this.state.email === null) {
      this.setState({ email: '' });
      return false;
    } else if (
      this.state.password === '' ||
      this.state.password === null ||
      this.state.password.length < 8
    ) {
      this.setState({ password: '' });
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.checkRequired()) {
    } else {
      this.showError('');

      const data = {
        email: this.state.email,
        password: this.state.password,
      };

      try {
        this.setState({ loading: true });
        const res = await axios.post(URLs.login, data);
        window.localStorage.setItem('jwt', res.data.token);
        window.location.replace('/');
        this.setState({ loading: false });
      } catch (err) {
        this.setState({
          msg: true,
          message: err.response.data.message,
          status: 'error',
          loading: false,
        });
        this.showError(this.state.message);
      }
    }
  };

  handleClose = () => {
    this.state.route
      ? window.location.replace('/')
      : this.setState({ open: false });
  };

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const error = urlParams.get('error');
    const token = urlParams.get('token');
    if (error) {
      this.setState({
        msg: true,
        message: error,
        status: 'error',
      });
    }
    if (token) {
      window.localStorage.setItem('jwt', token);
      window.location.replace('/');
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.msg && this.state.status ? (
          <Message
            title={`Login - ${this.state.status}`}
            message={this.state.message}
            status={this.state.status}
            closeTo={this.state.status === 'success' ? '/' : ''}
          />
        ) : (
          ''
        )}
        <Dialog
          open={this.state.open}
          aria-labelledby='form-dialog-title'
          scroll='body'>
          <DialogTitle id='form-dialog-title'>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Login to this Softvote, please provide required information.
            </DialogContentText>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id='email'
                name='email'
                type='email'
                placeholder='Your Email'
                fullWidth
                required
                value={this.state.email}
                onChange={this.handleChange}
                className={classes.inputs}
                error={this.state.email === ''}
                helperText={
                  this.state.email !== ''
                    ? ''
                    : 'Email is required and must be valid'
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id='password'
                name='password'
                placeholder='Password'
                fullWidth
                required
                value={this.state.password}
                onChange={this.handleChange}
                type={this.state.showPassword ? 'text' : 'password'}
                className={classes.inputs}
                error={this.state.password === ''}
                helperText={
                  this.state.password !== ''
                    ? ''
                    : 'Password must be atleast 8 characters!'
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        className={classes.passwordIcon}
                        onClick={this.showPassword}>
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography
                align='center'
                variant='body2'
                className={classes.error}>
                {this.state.errorMsg}
              </Typography>
              <Grid container justify='center'>
                <Button
                  type='submit'
                  color='secondary'
                  variant='contained'
                  className={classes.signupBtn}>
                  <Grid container justify='center' alignItems='center'>
                    {this.state.loading ? (
                      <CircularProgress
                        className={classes.progress}
                        disableShrink
                      />
                    ) : null}
                    Login
                  </Grid>
                </Button>
              </Grid>
            </form>
            <Typography align='center' variant='body2'>
              Or Login With
            </Typography>
            <Grid container justify='center'>
              <a href={URLs.authWithGoogle}>
                <Button
                  color='secondary'
                  variant='outlined'
                  className={classes.signupBtn}>
                  <img src={GoogleLogo} alt='' className={classes.googleIcon} />
                  Google
                </Button>
              </a>
            </Grid>
            <Typography align='center' variant='body2'>
              Don't have an account already?
              <Link to='/signup' className={classes.loginText}>
                Signup
              </Link>
            </Typography>
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button
              color='primary'
              variant='contained'
              onClick={this.handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
