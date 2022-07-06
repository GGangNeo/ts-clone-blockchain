/**
 * interface describes object
 *  Find differences between type and interface later ??
 * Compare fiels, types3.ts and interface.ts
 */

// //Error
// interface Hello = string
// interface ForntNumber = 1 | 2 | 3 | 4 | 5;

// view of type and interface  almost same.

// Same
// type CPlayer = {
//   readonly name: string;
//   team: Team;
//   backNumber: BackNumber;
//   nick?: string;
// };

interface CPlayer {
  readonly name: string;
  team: Team;
  backNumber: BackNumber;
  nick?: string;
}

const second: CPlayer = {
  name: 'nico',
  team: 'blue',
  backNumber: 1,
};
// Same

// Interface, view of type
interface User {
  name: string;
}
interface User {
  team: string;
}
interface UserFirst extends User {}

type TypeUser = {
  name: string;
};
type TypePlayer = TypeUser & {};

const user: UserFirst = {
  name: 'nico',
  team: 'bulls',
};

const user1: TypeUser = {
  name: 'nico',
};
// Interface, view of type
