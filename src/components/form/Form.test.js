import React from 'react';
import { mount, configure } from 'enzyme';
import Form from '../form/Form';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Form />', () => {
    it('has a header', () => {
        const form = mount(<Form />);
        expect(form.find('label').text()).toBe('Name')
    });
});