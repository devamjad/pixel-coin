const SHA256 = require('crypto-js/sha256');
class Block
{

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

isChainValid() 
{
for(let i= 1; i<this.chain.length; i++) 
{
const currentBlock = this.chain[i];
const previousBlock = this.chain[i-1];

if(currentBlock.hash!== currentBlock.calculateHash())
{
return false;
}

if(currentBlock.previousHash!==previousBlock.hash) 
{
return false;
}

}
return true; 
}


}

let pixelmetiCoin = new Blockchain();
pixelmetiCoin.addBlock(new Block(1,'08/25/2021',{amount:5}));
pixelmetiCoin.addBlock(new Block(2,'08/26/2021',{amount:10}));
pixelmetiCoin.addBlock(new Block(3,'08/27/2021',{amount:15}));
pixelmetiCoin.addBlock(new Block(4,'08/28/2021',{amount:20}));


console.log(JSON.stringify(pixelmetiCoin,null,4));

/// To verify if the blockchain is valid?

//console.log('Is blockchain valid??'+pixelmetiCoin.isChainValid());