import React from 'react';
import { string } from 'prop-types';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Head from './';

configure({ adapter: new Adapter() });

const options = {
    firstName: 'Максим',
    lastName:  'Сергийчук'
};
const props = {};

const result = mount(<Head { ...props } />, {
    context:           options,
    childContextTypes: { firstName: string, lastName: string }
});

describe('User component', () => {
    test(`should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test(`should have 1 'form' element`, () => {
        expect(result.find('form')).toHaveLength(1);
    });
});
