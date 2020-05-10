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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      username: null,
      password: null,
      passwordConfirm: null,
      errorMsg: '',
      msg: false,
      message: '',
      open: true,
      status: 'success',
      showPassword: false,
      showConfirmPassword: false,
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
    if (this.state.firstname === '' || this.state.firstname === null) {
      this.setState({ firstname: '' });
      return false;
    } else if (this.state.lastname === '' || this.state.lastname === null) {
      this.setState({ lastname: '' });
      return false;
    } else if (this.state.username === '' || this.state.username === null) {
      this.setState({ username: '' });
      return false;
    } else if (this.state.email === '' || this.state.email === null) {
      this.setState({ email: '' });
      return false;
    } else if (
      this.state.password === '' ||
      this.state.password === null ||
      this.state.password.length < 8
    ) {
      this.setState({ password: '' });
      return false;
    } else if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ passwordConfirm: '' });
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
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        userName: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };

      try {
        this.setState({ loading: true });
        const res = await axios.post(URLs.signup, data);
        this.setState({
          msg: true,
          message: res.data.message,
          status: res.data.status,
        });
        this.showError('');
        this.setState({ loading: false });
      } catch (err) {
        this.setState({
          msg: true,
          message: err.response.data.message,
          status: 'error',
        });
        this.setState({ loading: false });
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
  showConfirmPassword = () => {
    this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
  };

  componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const error = urlParams.get('error');
    if (error) {
      this.setState({
        msg: true,
        message: error,
        status: 'error',
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.msg && this.state.status ? (
          <Message
            title={`Signup - ${this.state.status}`}
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
          <DialogTitle id='form-dialog-title'>Signup</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To signup to this Softvote, please provide required information.
            </DialogContentText>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                margin='dense'
                id='firstname'
                name='firstname'
                label='Firstname'
                type='text'
                error={this.state.firstname === ''}
                helperText={
                  this.state.firstname === ''
                    ? 'Firstname must be atleast 3 characters'
                    : ''
                }
                value={this.state.firstname}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                margin='dense'
                id='lastname'
                name='lastname'
                label='Lastname'
                type='text'
                error={this.state.lastname === ''}
                helperText={
                  this.state.lastname === ''
                    ? 'Lastname must be atleast 3 characters'
                    : ''
                }
                value={this.state.lastname}
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                margin='dense'
                id='username'
                name='username'
                label='Username'
                type='text'
                value={this.state.username}
                fullWidth
                onChange={this.handleChange}
                className={classes.inputs}
                error={this.state.username === ''}
                helperText={
                  this.state.username !== '' ? '' : 'Please choose username'
                }
              />
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
              <TextField
                id='passwordConfirm'
                name='passwordConfirm'
                placeholder='Confirm Password'
                fullWidth
                required
                value={this.state.passwordConfirm}
                onChange={this.handleChange}
                type={this.state.showConfirmPassword ? 'text' : 'password'}
                className={classes.inputs}
                error={this.state.passwordConfirm === ''}
                helperText={
                  this.state.passwordConfirm !== ''
                    ? ''
                    : 'Password confirm must match password'
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        className={classes.passwordIcon}
                        onClick={this.showConfirmPassword}>
                        {this.state.showConfirmPassword ? (
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
                    Signup
                  </Grid>
                </Button>
              </Grid>
            </form>
            <Typography align='center' variant='body2'>
              Or Signup With
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
              Have an account already?
              <Link to='/login' className={classes.loginText}>
                Login
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

export default withStyles(styles)(Signup);
