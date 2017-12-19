import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Header from './';

configure({ adapter: new Adapter() });

const result = mount(<Header />);

describe('User component', () => {
    test(`should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test(`should have 1 'ul' element`, () => {
        expect(result.find('ul')).toHaveLength(1);
    });
    test(`should have 1 'p' element`, () => {
        expect(result.find('p')).toHaveLength(1);
    });
    test(`should have 2 'li' element`, () => {
        expect(result.find('li')).toHaveLength(2);
    });
});
