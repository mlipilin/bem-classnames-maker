import bem from './index';

describe('src/index.js', () => {
    describe('no params', () => {
        it('no block, no element and no mods', () => {
            expect(bem()()).toBe('');
        });
    });
    describe('block', () => {
        it('block only', () => {
            expect(bem('block')()).toBe('block');
        });
        it('block with one string mod', () => {
            expect(bem('block')('', 'mod')).toBe('block mod');
        });
        it('block with one mod', () => {
            expect(bem('block')('', ['mod'])).toBe('block block_mod');
        });
        it('block with mods array', () => {
            expect(bem('block')('', ['mod1', 'mod2'])).toBe('block block_mod1 block_mod2');
        });
        it('block with mod-value object', () => {
            expect(
                bem('block')('', {
                    mod1: 'value1',
                    mod2: 'value2',
                    mod3: false,
                    mod4: true,
                }),
            ).toBe('block block_mod1_value1 block_mod2_value2 block_mod4');
        });
    });
    describe('block__element', () => {
        it('block__element only', () => {
            expect(bem('block')('element')).toBe('block__element');
        });
        it('block__element with one string mod', () => {
            expect(bem('block')('element', 'mod')).toBe('block__element mod');
        });
        it('block__element with one mod', () => {
            expect(bem('block')('element', ['mod'])).toBe('block__element block__element_mod');
        });
        it('block__element with mods array', () => {
            expect(bem('block')('element', ['mod1', 'mod2'])).toBe(
                'block__element block__element_mod1 block__element_mod2',
            );
        });
        it('block with mod-value object', () => {
            expect(
                bem('block')('element', {
                    mod1: 'value1',
                    mod2: 'value2',
                    mod3: false,
                    mod4: true,
                }),
            ).toBe(
                'block__element block__element_mod1_value1 block__element_mod2_value2 block__element_mod4',
            );
        });
    });
    describe('block__element (custom delimiters settings)', () => {
        const blockClass = bem('block', {
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
                    mod3: false,
                    mod4: true,
                }),
            ).toBe(
                'block___element block___element_mod1-value1 block___element_mod2-value2 block___element_mod4',
            );
        });
    });
});
