//// [tests/cases/conformance/es6/classDeclaration/emitClassDeclarationWithLiteralPropertyNameInES6.ts] ////

//// [emitClassDeclarationWithLiteralPropertyNameInES6.ts]
class B {
    "hello" = 10;
    0b110 = "world";
    0o23534 = "WORLD";
    20 = "twenty";
    "foo"() { }
    0b1110() {}
    11() { }
    interface() { }
    static "hi" = 10000;
    static 22 = "twenty-two";
    static 0b101 = "binary";
    static 0o3235 = "octal";
}

//// [emitClassDeclarationWithLiteralPropertyNameInES6.js]
class B {
    "hello" = 10;
    0b110 = "world";
    0o23534 = "WORLD";
    20 = "twenty";
    "foo"() { }
    0b1110() { }
    11() { }
    interface() { }
    static "hi" = 10000;
    static 22 = "twenty-two";
    static 0b101 = "binary";
    static 0o3235 = "octal";
}
