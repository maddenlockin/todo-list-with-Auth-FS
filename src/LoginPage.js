import React, { Component } from 'react'
import { login } from './utils';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        const token = await login(this.state.email, this.state.password);

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
                        email
                        <input type="email" onChange={this.handleEmail}/>
                    </label>
                    <label>
                        password
                        <input type="password" onChange={this.handlePassword}/>
                    </label>
                    <button>log in</button>
                </form>
            </div>
        )
    }
}
