import React from 'react';
import { mount, configure } from 'enzyme';
import Login from './Login';
import Form from '../form/Form';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('<Login />',() => {
    it('has a header that changes', () => {
        const login = mount(<Login />);
        console.log(login.onChange());
        expect(login.find('.header').text()).toBe('Your name is ');
        expect(login.find(Form).length).toEqual(1);
        // expect(login.find('.header').text()).toBe('Your name is a');
    });
});



// it('clicking menu item',()=>{
//     const items = [{'id':1,'text':'hello'},{'id':2,'text':'world'}]
//     const handleClickStub = sinon.spy()
//     const wrapper = mount(<Parent items={items} handleClick={handleClickStub} />)
//     console.log(wrapper.state('clickedChild')) // prints false
//     wrapper.find(ChildComponent).last().simulate('click')
//     expect(handleClickStub.calledOnce).to.be.true // successful
//     console.log(wrapper.state('clickedChild'))  // prints true
// })