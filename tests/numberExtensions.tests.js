
import {installNumberExtensions, removeNumberExtensions} from '../src/numberExtensions';


describe('Number extensions', () => {

    beforeAll(() => {
        installNumberExtensions();
    });

    afterAll(() => {
        removeNumberExtensions();
    });

    describe('format', () => {
        it('Formats large number correclty', () => {

            expect(12345678.4321.format(2, 3)).toBe('12,345,678.43');
        });
    
        it('Formats large number with comma and dot', () => {
    
            expect(12345678.4321.format(2, 3, ' ')).toBe('12 345 678.43');
        });
    });

    describe('truncTo0', () => {
        it('Truncates positive', () => {
            expect(0.001.truncTo0()).toEqual(0);
            expect(0.0001.truncTo0()).toEqual(0);

            expect(0.01.truncTo0(2)).toEqual(0);
            expect(0.00999.truncTo0(2)).toEqual(0);
        });

        it('Truncates negatives', () => {
            expect((-0.001).truncTo0()).toEqual(0);
            expect((-0.0001).truncTo0()).toEqual(0);

            expect((-0.01).truncTo0(2)).toEqual(0);
            expect((-0.00999).truncTo0(2)).toEqual(0);
        });

        it('Leaves positives', () => {
            expect(0.001.truncTo0(4)).toEqual(0.001);
            expect(0.001001.truncTo0(3)).toEqual(0.001001);
            expect(0.0100000000001.truncTo0(2)).toEqual(0.0100000000001);
        });

        it('Leaves negatives', () => {
            expect((-0.001).truncTo0(4)).toEqual(-0.001);
            expect((-0.001001).truncTo0(3)).toEqual(-0.001001);
            expect((-0.0100000000001).truncTo0(2)).toEqual(-0.0100000000001);
        });
    });
});