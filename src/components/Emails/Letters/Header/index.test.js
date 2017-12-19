import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Header from './';

configure({ adapter: new Adapter() });

const message = 'message';
const props = {
    count:         5,
    searchLetters: jest.fn(() => [])
};
const state = {
    comment: ''
};
const mutatedState = {
    comment: message
};

const result = mount(<Header { ...props } />);

describe('Letters head component', () => {
    test(`Letters head should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test(`Letters head should have 1 'form' element`, () => {
        expect(result.find('form')).toHaveLength(1);
    });
    test(`Letters head should have 1 'input' element`, () => {
        expect(result.find('input[type=\'text\']')).toHaveLength(1);
    });
    test(`Letters head should have 1 'div' element`, () => {
        expect(result.find('div')).toHaveLength(1);
    });

    test(`Letters head  state and input value should reflect according changes if any text input provided`, () => {
        result.find('input[type=\'text\']').simulate('keyUp', {
            target: {
                value: message
            }
        });

        expect(result.state().comment).toEqual(mutatedState.comment);
    });

    test(`Letters head state and input value should reflect according changes if the form is submitted`, () => {
        result.find('form').simulate('submit');

        expect(result.state().comment).toEqual(mutatedState.comment);
    });
});
