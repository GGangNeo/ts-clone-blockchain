// define fuction
// function add(a: number, b: number) {
//   return a + b;
// }
// use arrow function
// const add = (a: number, b: number) => a + b;

// use type call signature
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
// Error return void
// const add: Add = (a, b) => {
//   a + b;
// };

// overloading
type Sub = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
// const sub: Sub = (a, b) => a - b;
// const sub: Sub = (a, b, c?) => a + b;
// const sub: Sub = (a, b, c?: number) => a - b;
const sub: Sub = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// Design type overloading
// router.push('/home')

// router.push({
//  path:'/home'
//  state:1
// })

type Config = {
  path: string;
  state: object;
};
type Push = {
  (a: string): void;
  (config: Config): void;
};

const push: Push = (param) => {
  if (typeof param === 'string') {
    param;
  } else {
    param.path = 'path';
  }
};
