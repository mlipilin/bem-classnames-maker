// Constants
import DEFAULT_SETTINGS, { ISettings } from './settings';

// Helpers
import { isArray, isObject, isString } from './helpers';

const makeMod = (el: string, modDelimiter: string, modValueDelimiter?: string) => (mods: string | Array<string> | Object = []) => {
    if (isArray(mods)) {
        const [mod, value] = <Array<string>>mods;
        // "el--mod-value"
        return `${el}${modDelimiter}${mod}${modValueDelimiter}${value}`;
    }

    // "el--mod"
    return `${el}${modDelimiter}${mods}`;
};

const makeClassName = (block: string, settings: ISettings = DEFAULT_SETTINGS) => (el: string, mods: string | Array<string> | Object = []) => {
    const { BLOCK_ELEMENT_DELIMITER, MOD_DELIMITER, MOD_VALUE_DELIMITER } = settings;

    const cls: string = el ? `${block}${BLOCK_ELEMENT_DELIMITER}${el}` : block;

    let clsMods:Array<string> = [];

    if (isString(mods)) {
        return `${block}${BLOCK_ELEMENT_DELIMITER}${el} ${mods}`;
    } else if (isArray(mods)) {
        clsMods = (<Array<string>>mods).map(makeMod(cls, MOD_DELIMITER, MOD_VALUE_DELIMITER));
    } else if (isObject(mods)) {
        clsMods = Object.entries(mods).map(makeMod(cls, MOD_DELIMITER, MOD_VALUE_DELIMITER));
    }

    return [cls, ...clsMods].join(' ');
};

export default makeClassName;
