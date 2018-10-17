import React from 'react';
import { mount, configure } from 'enzyme';
import Login from './Login';
import Form from '../form/Form';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Login />',() => {
    it('has a header', () => {
        const login = mount(<Login />)
        expect(login.find('.header').text()).toBe('Your name is ');
        expect(login.find(Form).length).toEqual(1);
    });
});