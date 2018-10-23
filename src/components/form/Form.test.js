import React from 'react';
import { mount, configure } from 'enzyme';
import Form from '../form/Form';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Form />', () => {
    describe('basic UI', () => {
        const username = 'testuser';
        const password = 'password123';
        let onChange = jest.fn();
        const wrapper = mount(<Form username={username} password={password} onChange={onChange} />);

        it('should have inputs, buttons and labels', () => {
            expect(wrapper.find('.nameLabel').text()).toBe('Name');
            expect(wrapper.find('.passwordLabel').text()).toBe('Password');
            expect(wrapper.find('input').length).toEqual(2);
            expect(wrapper.find('button').length).toEqual(2);
        });

        it('uses props for input values', () => {
            expect(wrapper.find('.nameInput').props().value).toBe('testuser');
            expect(wrapper.find('.passwordInput').props().value).toBe('password123');
        })
    })
    describe('onChange and onClick events are used', () => {
        const username = 'testuser';
        const password = 'password123';
        let onChange = jest.fn();
        let onSignIn = jest.fn();
        let onCreate = jest.fn();
        const wrapper = mount(<Form username={''} password={''}  onChange={onChange}
                                    onSignIn={onSignIn} onCreate={onCreate} />);

        it('calls on change for username input', () => {
            wrapper.find('.nameInput').simulate('change', { target: { value: username }});
            expect(onChange).toHaveBeenCalled();
        })

        it('calls on change for password input', () => {
            wrapper.find('.passwordInput').simulate('change', { target: { value: password }});
            expect(onChange).toHaveBeenCalled();
        })

        it('calls onCreate and onSignIn when buttons are used', () => {
            wrapper.find('.signInButton').simulate('click');
            expect(onSignIn).toHaveBeenCalled()
            wrapper.find('.createButton').simulate('click');
            expect(onCreate).toHaveBeenCalled()
        })
    })
});