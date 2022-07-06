/**
 * type restrict, alias and ?
 */
type Team = 'red' | 'blue' | 'white';
type BackNumber = 1 | 2 | 3 | 4 | 5;

type BPlayer = {
  name: string;
  team: Team;
  backNumber: BackNumber;
  nick?: string;
};

const first: BPlayer = {
  name: 'nico',
  team: 'blue',
  backNumber: 1,
};
