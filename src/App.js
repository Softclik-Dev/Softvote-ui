import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import theme from './config/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          This is the entry point  of softvote
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null, actions)(App);
