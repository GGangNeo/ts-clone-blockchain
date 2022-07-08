/**
 * @see [source](https://github.com/lodash/lodash/blob/master/head.js)
 * @see [source](https://github.com/lodash/lodash/blob/master/hasIn.js)
 * @see [source](https://github.com/lodash/lodash/blob/master/isBoolean.js)
 * @see [source](https://github.com/lodash/lodash/blob/master/toString.js)
 * @see [source](https://github.com/lodash/lodash/blob/master/split.js)
 * @see [source](https://github.com/lodash/lodash/blob/master/hasPath.js)
 * @see [source](https://github.com/lodash/lodash/blob/master/filter.js)
 * @see [source](https://github.com/lodash/lodash/blob/master/every.js)
 * @see [source](map.js: https://github.com/lodash/lodash/blob/master/map.js)
 */

declare module 'lodash' {
  // function head<T>(array:T):[0];
  function head(arr: readonly any[]): any[0];
  function hasIn(object: Object, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: any): string;
  function split(
    str: string,
    seperator: RegExp | string,
    limit: number
  ): string[];
  function hasPath(obj: Object, path: any[] | string): boolean;
  function filter(arr: any[], prediate: Function): any[];
  function every(arr: any[], prediate: Function): boolean;
  function map(arr: any[], iteratee: Function): any[];
}

declare module 'lodash' {
  export * from 'lodash';
}
