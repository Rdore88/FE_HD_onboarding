import React, { Component } from 'react';
import Form from '../form/Form';

export default class Login extends Component {
    state = {
        name: ''
    }
    render() {
        return (
            <div>
                <h1 className='header'>Your name is {this.state.name}</h1>
                <Form />
            </div>

    )
    }
}