import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as actions from './store/actions';
import theme from './config/theme';

// components
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SideMenu from './components/common/SideMenu';

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <BrowserRouter>
            <Header />
            <div style={{ ...theme.mixins.toolbar }}></div>
            <div style={{ display: 'flex' }}>
              <SideMenu />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
            <div style={{ ...theme.mixins.toolbar }}></div>
            <Footer />
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null, actions)(App);
