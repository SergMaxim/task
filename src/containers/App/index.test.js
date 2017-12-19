import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dom from 'react-test-renderer';

// Instruments
import App from './index';

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

const result = mount(<App />);
const renderTree = dom.create(<App />).toJSON();

describe('App component', () => {
    test('App component should correspond to its snapshot counterpart', () => {
        expect(renderTree).toMatchSnapshot();
    });
});
