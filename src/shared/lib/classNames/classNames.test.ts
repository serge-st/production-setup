import { classNames } from './classNames';

test('adds 1 + 2 to equal 3', () => {
    const classes = classNames('MainClass', { 'black': true, 'hidden': false }, ['outlined', 'inversed']);
    const result = 'MainClass black outlined inversed';
    expect(classes).toBe(result);
});

describe('Test classNames function', () => {
    test('Main class only', () => {
        const classes = classNames('MainClass', {}, []);
        const result = 'MainClass';
        expect(classes).toBe(result);
    });

    test('Main class and one mod with true', () => {
        const classes = classNames('MainClass', { 'black': true }, []);
        const result = 'MainClass black';
        expect(classes).toBe(result);
    });

    test('Main class and two mods (true and false)', () => {
        const classes = classNames('MainClass', { 'black': true, 'hidden': false }, []);
        const result = 'MainClass black';
        expect(classes).toBe(result);
    });

    test('Main class and additional class', () => {
        const classes = classNames('MainClass', {}, ['outlined']);
        const result = 'MainClass outlined';
        expect(classes).toBe(result);
    });

    test('Main class, two mods (true and false) and 2 additional classes', () => {
        const classes = classNames('MainClass', { 'black': true, 'hidden': false }, ['outlined', 'inversed']);
        const result = 'MainClass black outlined inversed';
        expect(classes).toBe(result);
    });
});