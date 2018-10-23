import React, { Component } from 'react';
import Form from '../form/Form';
import Feedback from '../feedback/Feedback';
import { signInSuccess, signInFailure, createSuccess, createFailure, closeFeedback, internalError, noInfoError } from "../feedback/feedbackEnums";
import axios from 'axios';

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
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onCreate = () => {
        if (this.state.password && this.state.username){
            axios.post('http://localhost:8080/user', {
                username: this.state.username,
                password: this.state.password
            })
                .then(response => {
                    if (response.data){
                        this.setState({
                            feedback: createSuccess
                        })
                    } else {
                        this.setState({
                            feedback: createFailure
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        feedback: internalError
                    })
                });
            this.setState({
                feedback: createFailure
            })
        } else {
            this.setState({
                feedback: noInfoError
            })
        }
    };

    onSignIn = () => {
        axios.get('http://35.227.108.57/user', {
            params: {
                username: this.state.username,
                password: this.state.password
            }
        })
            .then(response => {
                if (response.data){
                    this.setState({
                        feedback: signInSuccess
                    })
                } else {
                    this.setState({
                        feedback: signInFailure
                    })
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    feedback: internalError
                })
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
                <Form onChange={this.onChange} username={this.state.username} password={this.state.password}
                      onCreate={this.onCreate} onSignIn={this.onSignIn}/>
            </div>

    )
    }
}