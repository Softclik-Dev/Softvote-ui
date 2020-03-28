import React, { Component } from 'react';
import Home from './components/Home';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AccountType from './components/AccountType'
import CreateVote from './components/CreateVote'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



class App extends Component {
  render() {
    return(
      <div>
      <header>
      <NavBar/>      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/AccountType" component={AccountType}/>
          <Route path="/CreateVote" component={CreateVote}/>
        </Switch>
      </BrowserRouter>   
      </header>
      <body>
        <style/>
      </body>
      <footer>
         <Footer/>
      </footer>
          
      </div>
    )
  }
}

export default App;
