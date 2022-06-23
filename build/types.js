"use strict";
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
const player = {
    name: "nico",
};
// player.name = 1;
const player1 = {};
