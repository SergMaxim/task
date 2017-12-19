import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dom from 'react-test-renderer';

// Instruments
import Emails from './index';

configure({ adapter: new Adapter() });

global.fetch = jest.fn(() => ({
    data: [
        {
            name:  'Mansion Tech',
            theme: 'New Tasks',
            body:  'New Tasks',
            star:  true,
            type:  1,
            time:  1513545795
        },
        {
            name:  'Mansion Tech',
            theme: 'New Tasks',
            body:  'New Tasks',
            star:  true,
            type:  1,
            time:  1513545795
        }
    ],
    message: 'the request has succeeded'
}));

const classEmails = new Emails;
const result = mount(<Emails />);
const renderTree = dom.create(<Emails />).toJSON();
const message = 'message';

describe('Emails component', () => {
    test('Emails component should correspond to its snapshot counterpart', () => {
        expect(renderTree).toMatchSnapshot();
    });

    test('searchLetters function shoud be s function', () => {
        expect(typeof classEmails.searchLetters).toBe('function');
    });

    test(`Letters head  state and input value should reflect according changes if any text input provided`, () => {
        result.find('input[type=\'text\']').simulate('keyUp', {
            target: {
                value: message
            }
        });

        expect(result.state().letters).toEqual([]);
    });

});
