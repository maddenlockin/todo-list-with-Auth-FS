import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
            <Link to="/">Home</Link>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/todos">To-do List</Link>
            <button onClick={() => this.handleTokenChange('')}>logout</button>
            </div>
        )
    }
}
