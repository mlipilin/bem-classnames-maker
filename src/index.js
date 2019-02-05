// @flow

// Constants
import DEFAULT_SETTINGS from './settings';

const makeMod = (el, modDelimiter, modValueDelimiter) => (mods = ['', '']) => {
    if (Array.isArray(mods)) {
        const [mod, value] = mods;
        return `${el}${modDelimiter}${mod}${modValueDelimiter}${String(value)}`;
    }

    return `${el}${modDelimiter}${mods}`;
};

const makeClassName = (block, settings = DEFAULT_SETTINGS) => (el, mods = []) => {
    const { BLOCK_ELEMENT_DELIMITER, MOD_DELIMITER, MOD_VALUE_DELIMITER } = settings;

    const cls = el ? `${block}${BLOCK_ELEMENT_DELIMITER}${el}` : block;

    let clsMods = [];

    if (typeof mods === 'string') {
        clsMods = [mods];
    } else if (Array.isArray(mods)) {
        clsMods = mods.map(makeMod(cls, MOD_DELIMITER, MOD_VALUE_DELIMITER));
    } else if (typeof mods === 'object') {
        clsMods = Object.entries(mods).map(makeMod(cls, MOD_DELIMITER, MOD_VALUE_DELIMITER));
    }

    return [cls, ...clsMods].join(' ');
};

export default makeClassName;
