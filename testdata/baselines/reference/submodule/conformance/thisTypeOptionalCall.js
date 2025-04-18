//// [tests/cases/conformance/types/thisType/thisTypeOptionalCall.ts] ////

//// [thisTypeOptionalCall.ts]
function maybeBind<T, A extends any[], R>(obj: T, fn: ((this: T, ...args: A) => R) | undefined): ((...args: A) => R) | undefined {
    return fn?.bind(obj);
}

//// [thisTypeOptionalCall.js]
function maybeBind(obj, fn) {
    return fn?.bind(obj);
}
