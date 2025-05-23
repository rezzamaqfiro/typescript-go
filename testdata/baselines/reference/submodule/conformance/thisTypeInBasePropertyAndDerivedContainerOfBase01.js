//// [tests/cases/conformance/types/thisType/thisTypeInBasePropertyAndDerivedContainerOfBase01.ts] ////

//// [thisTypeInBasePropertyAndDerivedContainerOfBase01.ts]
interface BoxOfFoo<T extends Foo> {
    item: T
}

interface Foo {
    self: this;
}

interface Bar extends Foo {
    other: BoxOfFoo<this>;
}

//// [thisTypeInBasePropertyAndDerivedContainerOfBase01.js]
