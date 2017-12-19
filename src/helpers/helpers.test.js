import { getUniqueID, getRandomColor } from './';

describe('getUniqueID: ', () => {
    test('getUniqueID function shoud be s function', () => {
        expect(typeof getUniqueID).toBe('function');
    });

    test('getUniqueID return shoud return a string value', () => {
        expect(typeof getUniqueID(4)).toBe('string');
    });

    test('getUniqueID function shoud return 5 lenght', () => {
        expect(getUniqueID(5).length).toBe(5);
    });

    test('getUniqueID function shoud return 0 lenght if nunber < 0', () => {
        expect(getUniqueID(-5).length).toBe(0);
    });

    test('getUniqueID function shoud return dafault 15 lenght', () => {
        expect(getUniqueID().length).toBe(15);
    });

    test('getUniqueID function shoud be an error if wrong non-number argument were passed', () => {
        function getUniqueIDWithError () {
            getUniqueID('5');
        }
        expect(getUniqueIDWithError).toThrowError(
            'The function argument should be a number!'
        );
    });
    test('getRandomColor function shoud return !=', () => {
        expect(getUniqueID() !== getUniqueID()).toBe(true);
    });
});

describe('getRandomColor: ', () => {
    test('getRandomColor function shoud be s function', () => {
        expect(typeof getRandomColor).toBe('function');
    });
    test('getRandomColor function shoud return string', () => {
        expect(typeof getRandomColor()).toBe('string');
    });
    test('getRandomColor function shoud return string with # first char', () => {
        expect(getRandomColor().indexOf('#')).toBe(0);
    });
    test('getRandomColor function shoud return 7 char', () => {
        expect(getRandomColor().length).toBe(7);
    });

    test('getRandomColor function shoud return 7 char argument were passed', () => {
        expect(getRandomColor('sasasas').length).toBe(7);
    });

    test('getRandomColor function shoud return !=', () => {
        expect(getRandomColor() !== getRandomColor()).toBe(true);
    });
});
