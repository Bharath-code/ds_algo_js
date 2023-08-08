/**
 * Javascript have inbuilt hashtable is called object
 * But we are going create it from scratch
 * Default size of the table will  be 7 because it's a prime number for better allocation
 * It  has hash generator function which will produce value form 0 to 6 i.e size of hash
 * hash value will be deterministic -> alway return the same value for the key {car : green} -> where car is key and green is value
 * Hash is one way process when key is passed it will return hash value and with hash value you can't create the key
 */

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  // '_'  denotes this function shouldn't be directly called by the object
  // it should be called by other functions in the class
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  // bigO will be O(1) -> like push() in LL
  set(key, value) {
    const index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  //get may look like O(n), but the hastable size will be huge in js, so collision is rare
  get(keyVal) {
    const index = this._hash(keyVal);
    if (this.dataMap[index]) {
      for (const [key, value] of this.dataMap[index]) {
        if (key === keyVal) {
          return value;
        }
      }
    }

    return undefined;
  }
  keys() {
    let allKeys = [];
    for (const data of this.dataMap) {
      if (data) {
        for (const keys of data) {
          allKeys.push(keys[0]);
        }
      }
    }
    return allKeys;
  }
}
const myHashTable = new HashTable();
myHashTable.set("washer", 890);
myHashTable.set("lumber", 348);
myHashTable.set("bolts", 1000);
myHashTable.set("screws", 1000);
myHashTable.set("rench", 100);
myHashTable.set("spanner", 10);
console.log(myHashTable.get("washer"));
console.log(myHashTable.keys());
console.log(myHashTable);
