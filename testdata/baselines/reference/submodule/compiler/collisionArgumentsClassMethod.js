//// [tests/cases/compiler/collisionArgumentsClassMethod.ts] ////

//// [collisionArgumentsClassMethod.ts]
class c1 {
    public foo(i: number, ...arguments) { //arguments is error
        var arguments: any[]; // no error
    }
    public foo1(arguments: number, ...rest) { //arguments is error
        var arguments = 10; // no error
    }
    public fooNoError(arguments: number) { // no error
        var arguments = 10; // no error
    }
    public f4(i: number, ...arguments); // no codegen no error
    public f4(i: string, ...arguments); // no codegen no error
    public f4(i: any, ...arguments) { // error
        var arguments: any[]; // no error
    }
    public f41(arguments: number, ...rest); // no codegen no error
    public f41(arguments: string, ...rest); // no codegen no error
    public f41(arguments: any, ...rest) { // error
        var arguments: any; // no error
    }
    public f4NoError(arguments: number); // no error
    public f4NoError(arguments: string); // no error
    public f4NoError(arguments: any) { // no error
        var arguments: any; // no error
    }
}

declare class c2 {
    public foo(i: number, ...arguments); // No error - no code gen
    public foo1(arguments: number, ...rest); // No error - no code gen
    public fooNoError(arguments: number); // No error - no code gen

    public f4(i: number, ...arguments); // no codegen no error
    public f4(i: string, ...arguments); // no codegen no error
    public f41(arguments: number, ...rest); // no codegen no error
    public f41(arguments: string, ...rest); // no codegen no error
    public f4NoError(arguments: number); // no error
    public f4NoError(arguments: string); // no error
}

class c3 {
    public foo(...restParameters) {
        var arguments = 10; // no error
    }
    public fooNoError() {
        var arguments = 10; // no error
    }
}

//// [collisionArgumentsClassMethod.js]
class c1 {
    foo(i, ...arguments) {
        var arguments; // no error
    }
    foo1(arguments, ...rest) {
        var arguments = 10; // no error
    }
    fooNoError(arguments) {
        var arguments = 10; // no error
    }
    f4(i, ...arguments) {
        var arguments; // no error
    }
    f41(arguments, ...rest) {
        var arguments; // no error
    }
    f4NoError(arguments) {
        var arguments; // no error
    }
}
class c3 {
    foo(...restParameters) {
        var arguments = 10; // no error
    }
    fooNoError() {
        var arguments = 10; // no error
    }
}
