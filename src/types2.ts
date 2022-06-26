//Tuple
const t2player: [string, number, boolean] = ["nico", 1, true];
// t2player[0]=1;
// const t2player: readonly [string, number,boolean] = ['nico',1,true]
// playerTuple[0]='hello'

let t2a: undefined = undefined;
let t2b: null;

// any way to escape the typescript
const t2c: any = [];
const t2d: any = true;
t2c + t2d;

void,
never,
unknown
