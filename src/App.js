import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    //Link,
    Redirect
} from "react-router-dom";
import TodosPage from './TodosPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import './App.css'
import Header from './Header';

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  login = (userToken) => {
    this.setState({token: userToken})
    localStorage.setItem('TOKEN', userToken)
  }
  //logout, clear usertoken

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route 
            exact path='/' 
            render={(routerProps) => <HomePage  
                {...routerProps} />} 
              />
            <Route 
            exact path='/login' 
            render={(routerProps) => <LoginPage 
                {...routerProps} />} 
              />
            <Route 
            exact path='/signup' 
              render={(routerProps) => <SignUpPage 
                {...routerProps}/>} 
              />
            <Route 
            exact path='/todos' 
            render={(routerProps) =>
              this.state.token 
                ? <TodosPage {...routerProps} token={this.state.token} /> 
                : <Redirect to="/" />
              } 
            />
          </Switch>
        </div>
      </Router>
    )
  }
}
