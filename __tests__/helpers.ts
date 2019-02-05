import { isArray, isObject, isString } from '../src/helpers';

describe('helpers.js', () => {
    describe('isArray', () => {
        it('isArray() => false', () => expect(isArray()).toBeFalsy());
        it('isArray(null) => false', () => expect(isArray(null)).toBeFalsy());
        it('isArray(number) => false', () => expect(isArray(123)).toBeFalsy());
        it('isArray(string) => false', () => expect(isArray('abc')).toBeFalsy());
        it('isArray(boolean) => false', () => expect(isArray(true)).toBeFalsy());
        it('isArray(function) => false', () => expect(isArray(function() {})).toBeFalsy());
        it('isArray(object) => false', () => expect(isArray({})).toBeFalsy());
        it('isArray(array) => true', () => expect(isArray([1, 2, 3])).toBeTruthy());
    });
    describe('isObject', () => {
        it('isObject() => false', () => expect(isObject()).toBeFalsy());
        it('isObject(null) => false', () => expect(isObject(null)).toBeFalsy());
        it('isObject(number) => false', () => expect(isObject(123)).toBeFalsy());
        it('isObject(string) => false', () => expect(isObject('abc')).toBeFalsy());
        it('isObject(boolean) => false', () => expect(isObject(true)).toBeFalsy());
        it('isObject(function) => false', () => expect(isObject(function() {})).toBeFalsy());
        it('isObject(object) => false', () => expect(isObject({})).toBeTruthy());
        it('isObject(array) => true', () => expect(isObject([1, 2, 3])).toBeFalsy());
    });
    describe('isString', () => {
        it('isString() => false', () => expect(isString()).toBeFalsy());
        it('isString(null) => false', () => expect(isString(null)).toBeFalsy());
        it('isString(number) => false', () => expect(isString(123)).toBeFalsy());
        it('isString(string) => false', () => expect(isString('abc')).toBeTruthy());
        it('isString(boolean) => false', () => expect(isString(true)).toBeFalsy());
        it('isString(function) => false', () => expect(isString(function() {})).toBeFalsy());
        it('isString(object) => false', () => expect(isString({})).toBeFalsy());
        it('isString(array) => true', () => expect(isString([1, 2, 3])).toBeFalsy());
    });
});
