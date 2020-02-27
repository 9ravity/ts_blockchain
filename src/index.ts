import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previosHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previosHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previosHash = previosHash;
    this.data = data;
    this.timestamp = timestamp;
  }
  static calculateBlockHash = (
    index: number,
    previosHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previosHash + timestamp + data).toString();
  };

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previosHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
}

const geneisBlock: Block = new Block(0, "fgafsd", "", "ahahah", 21414);
let blockchain: Block[] = [geneisBlock];
console.log("blockchain : " + JSON.stringify(blockchain));
const getBlockchain = (): Block[] => {
  return blockchain;
};

const getLatestBlock = (): Block => {
  return blockchain[blockchain.length - 1];
};
const getNewTimeStamp = (): number => {
  return Math.round(new Date().getTime() / 1000);
};

const createNewBlock = (data: string): Block => {
  const previosBlock: Block = getLatestBlock();
  const newIndex: number = previosBlock.index + 1;
  const newNextTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previosBlock.hash,
    newNextTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previosBlock.hash,
    data,
    newNextTimestamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string => {
  return Block.calculateBlockHash(
    aBlock.index,
    aBlock.previosHash,
    aBlock.timestamp,
    aBlock.data
  );
};

const isBlockValid = (candidataBlock: Block, previosBlock: Block): boolean => {
  if (!Block.validateStructure(candidataBlock)) {
    return false;
  } else if (previosBlock.index + 1 !== candidataBlock.index) {
    return false;
  } else if (previosBlock.hash !== candidataBlock.previosHash) {
    return false;
  } else if (getHashforBlock(candidataBlock) !== candidataBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidataBlock: Block): void => {
  if (isBlockValid(candidataBlock, getLatestBlock())) {
    blockchain.push(candidataBlock);
  }
};

createNewBlock("second block");
createNewBlock("three block");
createNewBlock("four block");

console.log(blockchain);

export {};
