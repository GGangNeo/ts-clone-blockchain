/*
 * Variable
 */
let a: string = "hello";
//a = 1

// explicit
let b: boolean = false;
// implicit, typescript infer the type of variable. this is much better
let c = false;

let d = [1, 2, 3];
// d.push("1");

let e: number[] = [];
//let e: number = [];
e.push(1);

/**
 * type
 */
// using type
const player = {
  name: "nico",
};

const player1: {
  name?: string;
  age?: number;
} = {};
if (player1.age && player1.age < 10) {
}

type Player = {
  name?: string;
  age?: number;
};
const p1: Player = {
  name: "nico",
};
const p2: Player = {
  age: 11,
};

/**
 * function
 */
function playerDisplay(name: string) {}
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

const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker("nico");
nico.age = 12;

/**
 * readonly
 */
const a1: readonly number[] = [1, 2, 3];
// a1.push(4);

const a2: number[] = [222];
a2.push(3);
