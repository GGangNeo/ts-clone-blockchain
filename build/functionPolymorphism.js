"use strict";
// Error
// type superPrint = (arr: number[]) => {};
// const sp: superPrint = (arr) => {};
// use generic, generic is a place a holder
//  if use any, it doesn't protect
// type SuperPrint = {
//   <T>(arr: T[]): void;
// };
const superPrint = (arr) => {
    arr.forEach((e) => console.log(e));
};
superPrint([1, 2, 3]);
superPrint([false, true]);
// type doesn't have string array call signature, use generic
superPrint(['1']);
superPrint([1, 2, true, 'string']);
const superReturn = (arr) => arr[0];
const fpA = superReturn([1, 2, 3]);
const fpB = superReturn([true, true, 3]);
const fpC = superReturn(['string', 2, 3]);
// Typescript example use generic
const arrA = Array();
const nico3 = {
    name: 'nico',
    ExtraInfo: { favFood: 'kimchi' },
};
