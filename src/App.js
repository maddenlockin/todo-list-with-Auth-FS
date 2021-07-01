import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import TodosPage from './TodosPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import './App.css'

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  handleTokenChange = (myToken) => {
    this.setState({ token: myToken });
    localStorage.setItem('TOKEN', myToken);
  }

  render() {
    return (
      <div>
        <Router>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/todos">To-do List</Link>
            <button onClick={() => this.handleTokenChange('')}>logout</button>
          </ul>
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
        </Router>
      </div>
    )
  }
}
