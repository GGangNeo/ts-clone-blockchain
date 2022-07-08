/**
 * Goto https://github.com/DefinitelyTyped
 * npm i -D @types/node
 * ex) npm i axon
 * ex) npm i -D @types/axon
 */
import crypto from 'crypto';

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
    this.hash = Block.calculateHash(preHash, height, data);
  }
  static calculateHash(preHash: string, height: number, data: String) {
    const toHash = '${preHash}${height}${data}';
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return '';
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlock() {
    return this.blocks; //hacked
    // return [...this.block];
  }
}

const blockChanin = new BlockChain();

// blockChanin.addBlock('first');
blockChanin.addBlock('second');
blockChanin.addBlock('third');

console.log(blockChanin.getBlock());

// blockChanin.getBlock().push(new Block('xxxx', 1, 'xxxxhhhh'));

// console.log(blockChanin.getBlock());
