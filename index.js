class HashTable {
  constructor(size) {
    this._store = [];
    this._size = size;
  }

  _hash(str) {
    let index = 0;

    for (let i = 0; i < str.length; i++) {
      index += str.charCodeAt(i); 
    }

    return index % this._size;
  }

  setElement(key, value) {
    const index = this._hash(key);

    if (!this._store[index]) {
      this._store[index] = [
        [key, value]
      ];
    } else {
      const matchingIndex = this._store[index].find(el => el[0] === key);
      
      if (matchingIndex) {
        matchingIndex[1] = value;
      } else {
        this._store[index].push([key, value]);
      }
    }
  }

  getElement(key) {
    const index = this._hash(key);
    return this._store[index] ? this._store[index].find(el => el[0] === key)[1] : undefined;
  }

  dump() {
    return this._store;
  }
}

module.exports = HashTable;