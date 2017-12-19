import { getLetters } from './fetch';

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

describe('getLetters: ', () => {
    test('getLetters function shoud be s function', () => {
        expect(typeof getLetters).toBe('function');
    });

    test('getLetters return shoud return a json value', () => {
        expect(typeof getLetters('/letters.json')).toBe('object');
    });
});
