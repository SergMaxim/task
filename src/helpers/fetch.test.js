import { getLetters } from './fetch';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('getLetters: ', () => {
    test('getLetters function shoud be s function', () => {
        expect(typeof getLetters).toBe('function');
    });

    test('getLetters return shoud return a json value', () => {
        expect(typeof getLetters('/letters.json')).toBe('object');
    });
});

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
