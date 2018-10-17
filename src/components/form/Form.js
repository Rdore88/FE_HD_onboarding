import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <form action="">
                <label htmlFor="name">Name</label>
                <br/>
                <input name='name'/>
            </form>
        )
    }
}