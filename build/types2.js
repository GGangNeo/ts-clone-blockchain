"use strict";
//Tuple
const t2player = ["nico", 1, true];
// t2player[0]=1;
// const t2player: readonly [string, number,boolean] = ['nico',1,true]
// playerTuple[0]='hello'
let t2a = undefined;
let t2b;
// any way to escape the typescript
const t2c = [];
const t2d = true;
t2c + t2d;
// Force check the variable type.
let t2e;
//t2e.toUpperCase();
if (typeof t2e === "string") {
    t2e.toUpperCase();
}
// Function do not return, except for exceptions. type of never return exceptions.
function hello() {
    // return;
    throw new Error();
}
function hello2(name) {
    if (typeof name === "string") {
        console.log(name);
    }
    else if (typeof name === "number") {
        console.log(name + 1);
    }
    else {
        // type of name is never
        name;
    }
}
function hello3(name) {
    throw new Error();
}
