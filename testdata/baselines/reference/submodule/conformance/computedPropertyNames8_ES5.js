//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames8_ES5.ts] ////

//// [computedPropertyNames8_ES5.ts]
function f<T, U extends string>() {
    var t: T;
    var u: U;
    var v = {
        [t]: 0,
        [u]: 1
    };
}

//// [computedPropertyNames8_ES5.js]
function f() {
    var t;
    var u;
    var v = {
        [t]: 0,
        [u]: 1
    };
}
