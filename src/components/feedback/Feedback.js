import React, { Component } from 'react';
import './Feedback.css';

export default class Feedback extends Component {

    render() {
        let { show, success, message } = this.props.feedback;
        if (show) {
            return (
                <div className={success ? 'success feedback' : 'failure feedback'}>
                    <span onClick={this.props.onClose} id='close'>x</span>
                    <p className='message'>{message}</p>
                </div>
            )
        } else {
            return null
        }
    }
}