"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(preHash, height, data) {
        this.preHash = preHash;
        this.height = height;
        this.data = data;
        this.hash = '';
    }
}
