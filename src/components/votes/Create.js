import React, { Component } from 'react';
import {
  Grid,
  Typography,
  Card,
  Divider,
  Button,
  Tooltip,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  InputAdornment,
  DialogActions,
} from '@material-ui/core';
import { Email } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';

import { createVoteStyle } from '../../config/styles';
import TextBox from './TextBox';
import { Add } from '@material-ui/icons';

const styles = (theme) => createVoteStyle(theme);

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPart: false,
      partfname: null,
      partlname: null,
      partemail: null,
      partid: null,

      posTitle: null,
      addCand: false,
      candfname: null,
      candlname: null,
      candage: null,
      candimage: null,

      vote: {
        voteTitle: null,
        voteDesc: null,
        start: null,
        end: null,
        participants: [
          {
            firstName: null,
            lastName: null,
            id: null,
            email: null,
          },
        ],
        positions: [
          {
            title: null,
            candidates: [
              {
                firstName: null,
                lastName: null,
                age: null,
                imageUrl: null,
              },
            ],
          },
        ],
      },
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
  };

  handleAddParticipant = () => {
    this.setState({ addPart: true });
  };

  closeAddPart = () => {
    this.setState({ addPart: false });
  };
  handleAddPartChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };
  handleAddPartSubmit = (e) => {
    e.preventDefault();
    const vote = this.state.vote;
    vote.participants.push({
      firstName: this.state.partfname,
      lastName: this.state.partlname,
      id: this.state.partid,
      email: this.state.partemail,
    });
    this.setState({
      vote: vote,
      partemail: null,
      partfname: null,
      partlname: null,
      partid: null,
      addPart: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddPositionCand = () => {
    this.setState({ addCand: true });
  };

  handleAddPosition = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <form noValidate onSubmit={this.handleSubmit}>
          <Grid container justify='space-evenly'>
            <Grid item sm={12} md={5} className={classes.content}>
              <Typography align='center' color='secondary' variant='h6'>
                Vote Basic Info
              </Typography>
              <TextBox label='Vote Title' id='voteTitle' />
              <TextBox
                label='Vote Description'
                id='voteDescription'
                multiline={true}
              />
              <TextBox
                label='Vote Start Time (Optional)'
                id='start'
                type='date'
              />
              <TextBox label='Vote End Time (Optional)' id='end' type='date' />
              <hr></hr>
              <Typography align='center' color='secondary' variant='h6'>
                Vote Participants
              </Typography>
              <Grid container justify='flex-end'>
                <Tooltip title='Add Participant'>
                  <IconButton
                    color='secondary'
                    onClick={this.handleAddParticipant}>
                    <Add />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid item sm={12} md={5} className={classes.content}>
              <Typography align='center' color='secondary' variant='h6'>
                Vote Positions
              </Typography>
              <Paper className={classes.paper}>
                <TextBox
                  label='Position Title'
                  name='posTitle'
                  value={this.state.posTitle}
                  onChange={this.handleChange}
                />
                <Grid container justify='flex-end'>
                  <Tooltip title='Add Candidate'>
                    <IconButton
                      disabled={
                        this.state.posTitle === null ||
                        this.state.posTitle === ''
                      }
                      color='secondary'
                      onClick={this.handleAddPositionCand}>
                      <Add />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Paper>
              <Grid container justify='flex-end'>
                <Tooltip title='Add Position'>
                  <IconButton
                    color='secondary'
                    onClick={this.handleAddPosition}>
                    <Add />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>

            <Grid container justify='center'>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className={classes.submitBtn}>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
        {this.state.addPart ? (
          <Dialog
            open={this.state.addPart}
            aria-labelledby='form-dialog-title'
            scroll='body'>
            <DialogTitle id='form-dialog-title'>Add Paricipant</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add vote participant to {this.state.vote.voteTitle}
              </DialogContentText>
              <form noValidate onSubmit={this.handleAddPartSubmit}>
                <TextField
                  id='partfname'
                  name='partfname'
                  placeholder='Participant Firstname'
                  fullWidth
                  required
                  className={classes.input}
                  value={this.state.partfname}
                  onChange={this.handleAddPartChange}
                  error={this.state.partfname === ''}
                  helperText={
                    this.state.partfname !== ''
                      ? ''
                      : 'Participant Firstname is required'
                  }
                />
                <TextField
                  id='partlname'
                  name='partlname'
                  placeholder='Participant Lastname'
                  fullWidth
                  required
                  className={classes.input}
                  value={this.state.partlname}
                  onChange={this.handleAddPartChange}
                  error={this.state.partlname === ''}
                  helperText={
                    this.state.partlname !== ''
                      ? ''
                      : 'Participant Lastname is required'
                  }
                />
                <TextField
                  id='partid'
                  name='partid'
                  placeholder='Participant ID'
                  fullWidth
                  required
                  className={classes.input}
                  value={this.state.partid}
                  onChange={this.handleAddPartChange}
                  error={this.state.partid === ''}
                  helperText={
                    this.state.partid !== '' ? '' : 'Participant ID is required'
                  }
                />
                <TextField
                  id='partemail'
                  name='partemail'
                  type='email'
                  placeholder='participant Email'
                  fullWidth
                  required
                  className={classes.input}
                  value={this.state.partemail}
                  onChange={this.handleAddPartChange}
                  error={this.state.partemail === ''}
                  helperText={
                    this.state.partemail !== ''
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

                <Typography align='center' variant='body2'>
                  {this.state.errorMsg}
                </Typography>
                <Grid container justify='center'>
                  <Button
                    type='submit'
                    color='secondary'
                    variant='contained'
                    disabled={
                      this.state.partemail === null ||
                      this.state.partemail === '' ||
                      this.state.partfname === null ||
                      this.state.partfname === '' ||
                      this.state.partlname === null ||
                      this.state.partlname === '' ||
                      this.state.partid === null ||
                      this.state.partid === ''
                    }
                    className={classes.save}>
                    Add
                  </Button>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color='primary'
                variant='contained'
                onClick={this.closeAddPart}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
        {this.state.addCand ? (
          <Dialog
            open={this.state.addCand}
            aria-labelledby='form-dialog-title'
            scroll='body'>
            <DialogTitle id='form-dialog-title'>Add Candidate</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add Position Candidate to {this.state.posTitle}
              </DialogContentText>
              <form noValidate onSubmit={this.handleAddPartSubmit}>
                <TextField
                  id='candfname'
                  name='candfname'
                  placeholder='Candidate Firstname'
                  fullWidth
                  required
                  className={classes.input}
                  value={this.state.candfname}
                  onChange={this.handleAddcandChange}
                  error={this.state.candfname === ''}
                  helperText={
                    this.state.candfname !== ''
                      ? ''
                      : 'Candidate Firstname is required'
                  }
                />
                <TextField
                  id='candlname'
                  name='candlname'
                  placeholder='Candidate Lastname'
                  fullWidth
                  required
                  className={classes.input}
                  value={this.state.candlname}
                  onChange={this.handleAddcandChange}
                  error={this.state.candlname === ''}
                  helperText={
                    this.state.candlname !== ''
                      ? ''
                      : 'candicipant Lastname is required'
                  }
                />
                <TextField
                  id='candage'
                  name='candage'
                  placeholder='Candidate Age'
                  fullWidth
                  required
                  className={classes.input}
                  value={this.state.candid}
                  onChange={this.handleAddcandChange}
                />
                <TextField
                  id='candimage'
                  name='candimage'
                  type='url'
                  placeholder='Candidate Image Url'
                  fullWidth
                  required
                  className={classes.input}
                  value={this.state.candimage}
                  onChange={this.handleAddcandChange}
                  error={this.state.candimage === ''}
                  helperText={
                    this.state.candimage !== ''
                      ? ''
                      : 'Image is required and must be valid'
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button variant='contained' color='secondary'>
                          Browse
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />

                <Typography align='center' variant='body2'>
                  {this.state.errorMsg}
                </Typography>
                <Grid container justify='center'>
                  <Button
                    type='submit'
                    color='secondary'
                    variant='contained'
                    disabled={
                      this.state.candimage === null ||
                      this.state.candimage === '' ||
                      this.state.candfname === null ||
                      this.state.candfname === '' ||
                      this.state.candlname === null ||
                      this.state.candlname === ''
                    }
                    className={classes.save}>
                    Add
                  </Button>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color='primary'
                variant='contained'
                onClick={this.closeAddcand}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(Create);
