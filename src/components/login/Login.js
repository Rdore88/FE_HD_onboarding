import React, { Component } from 'react';
import Form from '../form/Form';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    onChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onCreate = () => {
        console.log("your trying to create")
    }

    onSignIn = () => {
        console.log("your trying to log in")
    }

    render() {
        return (
            <div>
                <h1 className='header'>Please login or sign up</h1>
                <Form onChange={this.onChange} state={this.state} onCreate={this.onCreate} onSignIn={this.onSignIn}/>
            </div>

    )
    }
}