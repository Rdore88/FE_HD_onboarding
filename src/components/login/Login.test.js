import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Login from './Login';
import Form from '../form/Form';
import Feedback from '../feedback/Feedback';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('<Login />',() => {
    describe('basic UI',() => {
        it('should have other components', () => {
            let wrapper = mount(<Login/>);
            expect(wrapper.contains(Form)).toEqual(true)
            expect(wrapper.contains(Feedback)).toEqual(true)
            expect(wrapper.find('.header').text()).toEqual('Please login or sign up')
        });
    });
});