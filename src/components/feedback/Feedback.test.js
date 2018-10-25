import React from 'react';
import { mount, configure } from 'enzyme';
import Feeback from './Feedback';
import Adapter from 'enzyme-adapter-react-16';
import { signInSuccess, signInFailure, createSuccess, createFailure, closeFeedback, internalError, noInfoError } from "./feedbackEnums";
import Form from "../form/Form";


configure({ adapter: new Adapter() });

describe('<Feedback />', () => {
    describe('different UIs', () => {

        it('Has correct UI for signIn', () => {
            const wrapper = mount(<Feeback feedback={signInSuccess} />);
            expect(wrapper.find('.message').text()).toBe(signInSuccess.message)
            expect(wrapper.find('.feedback').hasClass('success')).toEqual(true);
            expect(wrapper.find('.feedback').hasClass('failure')).toEqual(false);
        })

        it('Has correct UI for failure to signIn', () => {
            const wrapper = mount(<Feeback feedback={signInFailure} />);
            expect(wrapper.find('.message').text()).toBe(signInFailure.message)
            expect(wrapper.find('.feedback').hasClass('success')).toEqual(false);
            expect(wrapper.find('.feedback').hasClass('failure')).toEqual(true);
        })

        it('Has correct UI for user creation', () => {
            const wrapper = mount(<Feeback feedback={createSuccess} />);
            expect(wrapper.find('.message').text()).toBe(createSuccess.message)
            expect(wrapper.find('.feedback').hasClass('success')).toEqual(true);
            expect(wrapper.find('.feedback').hasClass('failure')).toEqual(false);
        })

        it('Has correct UI for user creation', () => {
            const wrapper = mount(<Feeback feedback={createFailure} />);
            expect(wrapper.find('.message').text()).toBe(createFailure.message)
            expect(wrapper.find('.feedback').hasClass('success')).toEqual(false);
            expect(wrapper.find('.feedback').hasClass('failure')).toEqual(true);
        })

        it('Has correct UI for internal error', () => {
            const wrapper = mount(<Feeback feedback={internalError} />);
            expect(wrapper.find('.message').text()).toBe(internalError.message)
            expect(wrapper.find('.feedback').hasClass('success')).toEqual(false);
            expect(wrapper.find('.feedback').hasClass('failure')).toEqual(true);
        })

        it('Has correct UI for info error', () => {
            const wrapper = mount(<Feeback feedback={noInfoError} />);
            expect(wrapper.find('.message').text()).toBe( noInfoError.message)
            expect(wrapper.find('.feedback').hasClass('success')).toEqual(false);
            expect(wrapper.find('.feedback').hasClass('failure')).toEqual(true);
        })

        it('Doesnt show up if there is not message', () => {
            const wrapper = mount(<Feeback feedback={closeFeedback} />);
            expect(wrapper.find('.feedback').length).toEqual(0);
        })

        // describe('Message has ')
    })
})