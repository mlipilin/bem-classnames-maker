import bemClassNames from './index';

describe('src/index.js', () => {
    describe('bemClassNames', () => {
        it('bemClassNames()() => ""', () => {
            expect(bemClassNames()()).toBe('');
        });
        it('bemClassNames("myblock")() => "myblock"', () => {
            expect(bemClassNames('myblock')()).toBe('myblock');
        });
        it('bemClassNames("myblock")("", ["mod1"]) => "myblock myblock--mod1"', () => {
            expect(bemClassNames('myblock')('', ['mod1'])).toBe('myblock myblock--mod1');
        });
    });
});

// blockClass();														// block
// blockClass('element');												// block__element
// blockClass('element', ['mod']);										// block__element_mod
// blockClass('element', ['mod1', 'mod2']);								// block__element_mod1 block__element_mod2
// blockClass('element', [{ 'mod': 'value' }]);							// block__element_mod_value
// blockClass('element', [{ 'mod1': 'value1' }, { 'mod2': 'value2' }]);	// block__element_mod1_value1 block__element_mod2_value2
