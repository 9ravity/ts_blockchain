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
}

const geneisBlock: Block = new Block(0, "fgafsd", "", "ahahah", 21414);

let blockchain: [Block] = [geneisBlock];

console.log("blockchain : " + JSON.stringify(blockchain));

export {};