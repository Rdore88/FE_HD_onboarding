import React, { Component } from 'react';
import Form from '../form/Form';
import Feedback from '../feedback/Feedback';
import { signInSuccess, signInFailure, createSuccess, createFailre, closeFeedback } from "../feedback/feedbackEnums";

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        feedback: {
            show: false,
            success: null,
            message: null
        }
    }

    onChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onCreate = () => {
        this.setState({
            feedback: createFailre
        })
    };

    onSignIn = () => {
        this.setState({
            feedback: signInSuccess
        })
    };

    onClose = () => {
        this.setState({
            feedback: closeFeedback
        })
    };

    render() {
        return (
            <div>
                <h1 className='header'>Please login or sign up</h1>
                <Feedback feedback={this.state.feedback} onClose={this.onClose}/>
                <Form onChange={this.onChange} state={this.state} onCreate={this.onCreate} onSignIn={this.onSignIn}/>
            </div>

    )
    }
}