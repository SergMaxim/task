import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import User from './';

configure({ adapter: new Adapter() });

const options = {
    firstName: 'Максим',
    lastName:  'Сергийчук'
};
const props = {};

const result = mount(<User { ...props } />, {
    context: options
});

describe('User component', () => {
    test(`should have 1 'img' element`, () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test(`User isButtons to be init false`, () => {
        expect(result.state().isButtons).toBe(false);
    });

    test(`User simulate click button`, () => {
        result.find('span').simulate('click');

        expect(result.find('li')).toHaveLength(2);
    });
});
