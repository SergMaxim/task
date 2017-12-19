import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dom from 'react-test-renderer';

// Instruments
import Menu from './';

configure({ adapter: new Adapter() });

const renderTree = dom.create(<Menu />).toJSON();

describe('Menu component', () => {
    test('Menu component should correspond to its snapshot counterpart', () => {
        expect(renderTree).toMatchSnapshot();
    });
});
