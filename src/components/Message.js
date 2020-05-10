import React, { Component } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core';

export class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      open: true,
    };
  }

  handleClose = () => {
    this.state.closeTo
      ? window.location.replace(this.state.closeTo)
      : this.setState({ open: false });
  };
  render() {
    const color = this.state.status === 'error' ? 'error' : 'textSecondary';
    return (
      <div>
        <Dialog
          open={this.state.open}
          aria-labelledby='form-dialog-title'
          scroll='body'>
          <DialogTitle id='form-dialog-title' color={color}>
            <Typography variant='body2' color={color}>
              {this.state.title}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{this.state.message}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color='primary'
              variant='contained'
              onClick={this.handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Message;
