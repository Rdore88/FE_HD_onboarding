import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
    render() {
        let { username, password } = this.props.state;
        return (
            <div className='form-div'>
                <div className='label-div'>
                    <label className='label' htmlFor='name'>Name</label>
                    <br/>
                    <input name='username' className='input' required={true} value={username} onChange={this.props.onChange} />
                    <br/>
                    <br/>
                    <label className='label' htmlFor='name'>Password</label>
                    <br/>
                    <input name='password' type='password' className='input' required={true} value={password} onChange={this.props.onChange} />
                </div>
                <div className='button-div'>
                    <button onClick={this.props.onSignIn}> Sign In </button>
                    <button onClick={this.props.onCreate}> Create </button>
                </div>
            </div>
        )
    }
}