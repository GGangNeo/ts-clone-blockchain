"use strict";
// define fuction
// function add(a: number, b: number) {
//   return a + b;
// }
// use arrow function
// const add = (a: number, b: number) => a + b;
const add = (a, b) => a + b;
// const sub: Sub = (a, b) => a - b;
// const sub: Sub = (a, b, c?) => a + b;
// const sub: Sub = (a, b, c?: number) => a - b;
const sub = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
const push = (param) => {
    if (typeof param === 'string') {
        param;
    }
    else {
        param.path = 'path';
    }
};
