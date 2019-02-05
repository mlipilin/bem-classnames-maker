import bemClassNames from './index';

describe('src/index.js', () => {
    describe('no params', () => {
        it('no block, no element and no mods', () => {
            expect(bemClassNames()()).toBe('');
        });
    });
    describe('block', () => {
        it('block only', () => {
            expect(bemClassNames('block')()).toBe('block');
        });
        it('block with one string mod', () => {
            expect(bemClassNames('block')('', 'mod')).toBe('block mod');
        });
        it('block with one mod', () => {
            expect(bemClassNames('block')('', ['mod'])).toBe('block block_mod');
        });
        it('block with mods array', () => {
            expect(bemClassNames('block')('', ['mod1', 'mod2'])).toBe(
                'block block_mod1 block_mod2',
            );
        });
        it('block with mod-value object', () => {
            expect(
                bemClassNames('block')('', {
                    mod1: 'value1',
                    mod2: 'value2',
                }),
            ).toBe('block block_mod1_value1 block_mod2_value2');
        });
    });
    describe('block__element', () => {
        it('block__element only', () => {
            expect(bemClassNames('block')('element')).toBe('block__element');
        });
        it('block__element with one string mod', () => {
            expect(bemClassNames('block')('element', 'mod')).toBe('block__element mod');
        });
        it('block__element with one mod', () => {
            expect(bemClassNames('block')('element', ['mod'])).toBe(
                'block__element block__element_mod',
            );
        });
        it('block__element with mods array', () => {
            expect(bemClassNames('block')('element', ['mod1', 'mod2'])).toBe(
                'block__element block__element_mod1 block__element_mod2',
            );
        });
        it('block__element with mod-value object', () => {
            expect(
                bemClassNames('block')('element', {
                    mod1: 'value1',
                    mod2: 'value2',
                }),
            ).toBe('block__element block__element_mod1_value1 block__element_mod2_value2');
        });
    });
    describe('block__element (cutsom delimiters settings)', () => {
        const blockClass = bemClassNames('block', {
            BLOCK_ELEMENT_DELIMITER: '___',
            MOD_DELIMITER: '_',
            MOD_VALUE_DELIMITER: '-',
        });
        it('block__element only', () => {
            expect(blockClass('element')).toBe('block___element');
        });
        it('block__element with one string mod', () => {
            expect(blockClass('element', 'mod')).toBe('block___element mod');
        });
        it('block__element with one mod', () => {
            expect(blockClass('element', ['mod1'])).toBe('block___element block___element_mod1');
        });
        it('block__element with mods array', () => {
            expect(blockClass('element', ['mod1', 'mod2'])).toBe(
                'block___element block___element_mod1 block___element_mod2',
            );
        });
        it('block__element with mod-value object', () => {
            expect(
                blockClass('element', {
                    mod1: 'value1',
                    mod2: 'value2',
                }),
            ).toBe('block___element block___element_mod1-value1 block___element_mod2-value2');
        });
    });
});
