import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dom from 'react-test-renderer';

// Instruments
import Letters from './';

configure({ adapter: new Adapter() });

const message = 'message';
const props = {
    letters: [
        {
            name:  'name',
            star:  true,
            theme: 'theme',
            time:  1513545795
        },
        {
            name:  'name2',
            star:  false,
            theme: 'theme2',
            time:  1513545795
        }
    ],
    searchLetters: jest.fn()
};
const state = {
    comment: ''
};
const mutatedState = {
    comment: message
};

const result = mount(<Letters { ...props } />);
const renderTree = dom.create(<Letters { ...props } />).toJSON();

describe('Letters component', () => {
    test(`Letters should div 2 'Letter' element`, () => {
        expect(result.find('Letter')).toHaveLength(2);
    });
    test('Letters component should correspond to its snapshot counterpart', () => {
        expect(renderTree).toMatchSnapshot();
    });
});
