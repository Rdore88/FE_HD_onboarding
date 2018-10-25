import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './components/login/Login';

configure({ adapter: new Adapter() });

describe('Trying to log int', () => {
    it('tests clicking buttons', () => {
        let wrapper = mount(<Login />);
        console.log("here")
        expect(wrapper.find('button').length).toEqual(2);
        wrapper.find('.signInButton').simulate('click');
    })
})

