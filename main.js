const SHA256 = require('crypto-js/sha256');
class Block{

constructor(index,timestamp,data,previousHash='')
{
this.index = index;
this.timestamp = timestamp;
this.data = data;
this.previousHash = previousHash;
this.hash = this.calculateHash();
}

// Method
calculateHash() 
{

 return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();   
}

}

class Blockchain{

constructor () 
{
this.chain = [this.createGensisBlock()]; 
}

createGensisBlock() 
{
return new Block(0,"08/24/2021","Gensis Block","0"); 
}

getLatestBlock() 
{
return this.chain[this.chain.length -1];
}

addBlock(newBlock)
{
newBlock.previousHash = this.getLatestBlock().hash;
newBlock.hash = newBlock.calculateHash();
this.chain.push(newBlock);
}


}

let pixelmetiCoin = new Blockchain();
pixelmetiCoin.addBlock(new Block(1,'25/08/2021',{amount:5}));
pixelmetiCoin.addBlock(new Block(2,'26/08/2021',{amount:10}));
pixelmetiCoin.addBlock(new Block(3,'27/08/2021',{amount:15}));
pixelmetiCoin.addBlock(new Block(4,'28/08/2021',{amount:20}));

console.log(JSON.stringify(pixelmetiCoin,null,4));