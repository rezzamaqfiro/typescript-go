//// [tests/cases/conformance/externalModules/topLevelAwait.1.ts] ////

//// [index.ts]
export const x = 1;
await x;

// reparse element access as await
await [x];
await [x, x];

// reparse call as await
declare function f(): number;
await (x);
await (f(), x);
await <number>(x);
await <number>(f(), x);

// reparse tagged template as await
await ``;
await <string> ``;

// member names should be ok
class C1 {
    await() {}
}
class C2 {
    get await() { return 1; }
    set await(value) { }
}
class C3 {
    await = 1;
}
({
    await() {}
});
({
    get await() { return 1 },
    set await(value) { }
});
({
    await: 1
});

// property access name should be ok
C1.prototype.await;

// await in decorators
declare const dec: any;
@(await dec)
class C {
}

// await allowed in aliased import
import { await as _await } from "./other";

// newlines
// await in throw
throw await
    1;

// await in var
let y = await
    1;

// await in expression statement;
await
    1;

//// [other.ts]
const _await = 1;

// await allowed in aliased export
export { _await as await };

// for-await-of
const arr = [Promise.resolve()];

for await (const item of arr) {
  item;
}


//// [other.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.await = void 0;
const _await = 1;
exports.await = _await;
// for-await-of
const arr = [Promise.resolve()];
for await (const item of arr) {
    item;
}
//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 1;
await exports.x;
// reparse element access as await
await [exports.x];
await [exports.x, exports.x];
await (exports.x);
await (f(), exports.x);
await (exports.x);
await (f(), exports.x);
// reparse tagged template as await
await ``;
await ``;
// member names should be ok
class C1 {
    await() { }
}
class C2 {
    get await() { return 1; }
    set await(value) { }
}
class C3 {
    await = 1;
}
({
    await() { }
});
({
    get await() { return 1; },
    set await(value) { }
});
({
    await: 1
});
// property access name should be ok
C1.prototype.await;
@(await dec)
class C {
}
// newlines
// await in throw
throw await 1;
// await in var
let y = await 1;
// await in expression statement;
await 1;
