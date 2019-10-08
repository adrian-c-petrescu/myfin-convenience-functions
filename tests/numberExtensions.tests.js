
import {installNumberExtensions, removeNumberExtensions} from '../src/numberExtensions';


describe('Number extensions', () => {

    beforeAll(() => {
        installNumberExtensions();
    });

    afterAll(() => {
        removeNumberExtensions();
    });

    it('Formats large number correclty', () => {

        expect(12345678.4321.format(2, 3)).toBe('12,345,678.43');
    });

    it('Formats large number with comma and dot', () => {

        expect(12345678.4321.format(2, 3, ' ')).toBe('12 345 678.43');
    });
});