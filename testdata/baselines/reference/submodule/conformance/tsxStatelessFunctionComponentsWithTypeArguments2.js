//// [tests/cases/conformance/jsx/tsxStatelessFunctionComponentsWithTypeArguments2.tsx] ////

//// [file.tsx]
import React = require('react')

declare function ComponentSpecific1<U>(l: {prop: U, "ignore-prop": string}): JSX.Element;
declare function ComponentSpecific2<U>(l: {prop: U}): JSX.Element;

// Error
function Bar<T extends {prop: number}>(arg: T) {
    let a1 = <ComponentSpecific1 {...arg} ignore-prop={10} />;
 }

// Error
function Baz<T>(arg: T) {
    let a0 = <ComponentSpecific1 {...arg} />
}

declare function Link<U>(l: {func: (arg: U)=>void}): JSX.Element;

// Error
function createLink(func: (a: number, b: string)=>void) {
    let o = <Link func={func} />
}

interface InferParamProp<T> {
    values: Array<T>;
    selectHandler: (selectedVal: T) => void;
}

declare function InferParamComponent<T>(attr: InferParamProp<T>): JSX.Element;

// Error
let i = <InferParamComponent values={[1, 2, 3, 4]} selectHandler={(val: string) => { }} />;


//// [file.jsx]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// Error
function Bar(arg) {
    let a1 = <ComponentSpecific1 {...arg} ignore-prop={10}/>;
}
// Error
function Baz(arg) {
    let a0 = <ComponentSpecific1 {...arg}/>;
}
// Error
function createLink(func) {
    let o = <Link func={func}/>;
}
// Error
let i = <InferParamComponent values={[1, 2, 3, 4]} selectHandler={(val) => { }}/>;
