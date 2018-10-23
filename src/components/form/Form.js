import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
    render() {
        return (
            <div className='form-div'>
                <div className='label-div'>
                    <label className='label nameLabel' htmlFor='name'>Name</label>
                    <br/>
                    <input name='username' className='input nameInput' value={this.props.username} onChange={this.props.onChange} />
                    <br/>
                    <br/>
                    <label className='label passwordLabel' htmlFor='name'>Password</label>
                    <br/>
                    <input name='password' type='password' className='input passwordInput' value={this.props.password} onChange={this.props.onChange} />
                </div>
                <div className='button-div'>
                    <button className='signInButton' onClick={this.props.onSignIn}> Sign In </button>
                    <button className='createButton' onClick={this.props.onCreate}> Create </button>
                </div>
            </div>
        )
    }
}