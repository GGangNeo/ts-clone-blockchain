//Tuple
const t2player: [string, number, boolean] = ['nico', 1, true];
// t2player[0]=1;
// const t2player: readonly [string, number,boolean] = ['nico',1,true]
// playerTuple[0]='hello'

let t2a: undefined = undefined;
let t2b: null;

// any way to escape the typescript
const t2c: any = [];
const t2d: any = true;
t2c + t2d;

// Force check the variable type.
let t2e: unknown;
//t2e.toUpperCase();
if (typeof t2e === 'string') {
  t2e.toUpperCase();
}

// Function do not return, except for exceptions. type of never return exceptions.
function hello(): never {
  // return;
  throw new Error();
}
function hello2(name: string | number) {
  if (typeof name === 'string') {
    console.log(name);
  } else if (typeof name === 'number') {
    console.log(name + 1);
  } else {
    // type of name is never
    name;
  }
}
function hello3(name: string): never {
  throw new Error();
}
