class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);

    if (!this.dataMap[index]) return undefined;

    for (let i = 0; i < this.dataMap[index].length; i++) {
      if (this.dataMap[index][i][0] === key) {
        return this.dataMap[index][i][1];
      }
    }
  }
}

let newHashTable = new HashTable();
console.log(newHashTable);
newHashTable.set("washer", 200);
newHashTable.set("lumber", 400);
newHashTable.set("dish", 100);
console.log(newHashTable);
console.log(newHashTable.get("dish"));
console.log(newHashTable.get("lumber"));
console.log(newHashTable.get("washer"));
console.log(newHashTable.get("dishes"));
