"use strict";
/*
 * Variable
 */
let a = "hello";
//a = 1
// explicit
let b = false;
// implicit, typescript infer the type of variable. this is much better
let c = false;
let d = [1, 2, 3];
// d.push("1");
let e = [];
//let e: number = [];
e.push(1);
/**
 * type
 */
// using type
const player = {
    name: "nico",
};
const player1 = {};
if (player1.age && player1.age < 10) {
}
const p1 = {
    name: "nico",
};
const p2 = {
    age: 11,
};
/**
 * function
 */
function playerDisplay(name) { }
// function playerMaker(name: string) {
//   return name;
// }
// const nico = playerMaker("nico");
// nico.age;
// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
//}
// nico.age = 12;
const playerMaker = (name) => ({ name });
const nico = playerMaker("nico");
nico.age = 12;
/**
 * readonly
 */
const a1 = [1, 2, 3];
// a1.push(4);
const a2 = [222];
a2.push(3);
