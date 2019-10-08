import { installArrayExtensions, removeArrayExtensions } from  '../src/arrayExtensions';


describe('arrayExtensions', () => {

    beforeAll(() => {
       installArrayExtensions();
    });

    afterAll(() => {
        removeArrayExtensions();
    });

    describe('BinarySearch', () => {
        describe('odd', () => {
            const input = [1, 2, 3, 4, 5];

            it('Locates 1', () => {
                expect(input.binarySearch(1, elem => elem)).toBe(1);
            });
            it('Locates 2', () => {
                expect(input.binarySearch(2, elem => elem)).toBe(2);
            });
            it('Locates 3', () => {
                expect(input.binarySearch(3, elem => elem)).toBe(3);
            });
            it('Locates 4', () => {
                expect(input.binarySearch(4, elem => elem)).toBe(4);
            });
            it('Locates 5', () => {
                expect(input.binarySearch(5, elem => elem)).toBe(5);
            });

            it('Fails on -1', () => {
                expect(input.binarySearch(-1, elem => elem)).toBe(null);
            });
            it('Fails on 7', () => {
                expect(input.binarySearch(7, elem => elem)).toBe(null);
            });
        });

        describe('even', () => {
            const input = [1, 2, 3, 4, 5, 6];

            it('Locates 1', () => {
                expect(input.binarySearch(1, elem => elem)).toBe(1);
            });
            it('Locates 2', () => {
                expect(input.binarySearch(2, elem => elem)).toBe(2);
            });
            it('Locates 3', () => {
                expect(input.binarySearch(3, elem => elem)).toBe(3);
            });
            it('Locates 4', () => {
                expect(input.binarySearch(4, elem => elem)).toBe(4);
            });
            it('Locates 5', () => {
                expect(input.binarySearch(5, elem => elem)).toBe(5);
            });
            it('Locates 6', () => {
                expect(input.binarySearch(6, elem => elem)).toBe(6);
            });

            it('Fails on -1', () => {
                expect(input.binarySearch(-1, elem => elem)).toBe(null);
            });
            it('Fails on 7', () => {
                expect(input.binarySearch(7, elem => elem)).toBe(null);
            });
        });
    });

    describe('Distinct', () => {
        it('Works on empty arrays', () => {
            expect([].distinct().length).toBe(0);
        });

        it('Works on already distinct strings', () => {
            expect(['a', 'b', 'c'].distinct()).toEqual(['a', 'b', 'c']);
        });

        it('Removes dups from string array', () => {
            expect(['a', 'b', 'a', 'c', 'b', 'd'].distinct()).toEqual(['a', 'b', 'c', 'd']);
        });
    });

    describe('GroupBy', () => {
        it('Works on strings', () => {
            const array = [ { a: '123', b: 5 }, { a: '234', b: 6 }, { a: '123', b: 4 }, { a: '234', b: 7 }, { a: '123', b: 1 } ];

            const result = array.groupBy(item => item.a);
            expect(Object.keys(result)).toEqual([ '123', '234' ]);
            expect(result['123']).toEqual([array[0], array[2], array[4]]);
            expect(result['234']).toEqual([array[1], array[3]]);
        });

        it('Works on numbers', () => {
            const array = [ { a: 123, b: 5 }, { a: 234, b: 6 }, { a: 123, b: 4 }, { a: 234, b: 7 }, { a: 123, b: 1 } ];

            const result = array.groupBy(item => item.a);
            expect(Object.keys(result)).toEqual([ '123', '234' ]);
            expect(result[123]).toEqual([array[0], array[2], array[4]]);
            expect(result[234]).toEqual([array[1], array[3]]);
        });
    });

    describe('Sum', () => {
       it('Sums up 0 element arrays', () => {
           expect([].sum()).toBe(0);
       });

        it('Sums up array of numbers', () => {
            expect([1,2,3,4].sum()).toBe(10);
        });

        it('Sums by lambda', () => {
            expect([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}, {a: {b: 4}}].sum(item => item.a.b)).toBe(10);
        });
    });

    describe('Select Many', () => {
       it('Empty array', () => {
           expect([].selectMany()).toEqual([]);
       });

       it('Liniarizes items', () => {
           expect([[1,2,3], [4], [], [5, 6, 7]].selectMany()).toEqual([1,2,3,4,5,6,7]);
       });
    });

    describe('Max', () => {
        it('Computes max on simple array', () => {
            expect([5, 1, 2].max()).toBe(5);
        });

        it('Returns -infinity for empty array', () => {
            expect([].max()).toBe(0);
        });

        it('Returns correct max when using lambda', () => {
            expect([ {a: 5}, {a: 1}, {a: 7}].max(x => x.a)).toBe(7);
        });
    });

    describe('Min', () => {
        it('Computes min on simple array', () => {
            expect([5, 1, 2].min()).toBe(1);
        });

        it('Returns +infinity for empty array', () => {
            expect([].min()).toBe(0);
        });

        it('Returns correct max when using lambda', () => {
            expect([ {a: 5}, {a: 1}, {a: 7}].min(x => x.a)).toBe(1);
        });
    });
});
