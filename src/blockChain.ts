/**
 * Goto https://github.com/DefinitelyTyped
 * npm i -D @types/node
 * ex) npm i axon
 * ex) npm i -D @types/axon
 */
import crypto from 'crypto';
import axon from 'axon';

interface BlockShape {
  hash: string;
  preHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public preHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = '';
  }
}
