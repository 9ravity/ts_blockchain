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
  const nextTimestamp: number = getLatestBlock().timestamp;
  return;
};

export {};
