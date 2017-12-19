import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dom from 'react-test-renderer';

// Instruments
import Letter from './';

configure({ adapter: new Adapter() });


const message = 'message';
const props = {
    name:  'name',
    star:  true,
    theme: 'theme',
    time:  1513545795
};
const state = {
    comment: ''
};
const mutatedState = {
    comment:     message
};

const result = mount(<Letter { ...props } />);
const renderTree = dom.create(<Letter { ...props } />).toJSON();


describe('User component', () => {
    test(`User should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test(`User should have 1 'span' element`, () => {
        expect(result.find('span')).toHaveLength(1);
    });

    test(`User should have 1 'time' element`, () => {
        expect(result.find('time')).toHaveLength(1);
    });

    test(`User should div 2 'time' element`, () => {
        expect(result.find('div')).toHaveLength(2);
    });
    test('User component should correspond to its snapshot counterpart', () => {
        expect(renderTree).toMatchSnapshot();
    });
    test('User style should correspond to its snapshot counterpart', () => {
        expect(result.find('.star').props().style.backgroundPosition).toBe("top center")
    });
});