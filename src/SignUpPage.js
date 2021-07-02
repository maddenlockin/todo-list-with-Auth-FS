import React, { Component } from 'react'
import { signup } from './utils';

export default class SignUpPage extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = async e => {
        e.preventDefault();
        
        const token = await signup(this.state.email, this.state.password);

        this.props.login(token)

        this.props.history.push('/todos')
    }

    handleEmail = e => {
        this.setState({ email: e.target.value });
    }

    handlePassword = e => {
        this.setState({ password: e.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email: 
                        <input type="email" onChange={this.handleEmail}/>
                    </label>
                    <label>
                        password: 
                        <input type="password" onChange={this.handlePassword}/>
                    </label>
                    <button>sign me up</button>
                </form>
            </div>
        )
    }
}
