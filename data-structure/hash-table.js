class HashNode {
  constructor(key, hashCode, value, next = null) {
    this.key = key;
    this.hashCode = hashCode;
    this.value = value;
    this.next = next;
  }
}

class HashTable {
  constructor(size = 32) {
    this.buckets = new Array(size)
  }

  #addBucket(node) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (!this.buckets[i]) this.buckets[i] = node
      return this.buckets[i]
    }
  }

  #getBucketIndex(hashCode) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] && this.buckets[i].hashCode === hashCode) return i
    }
  }

  #hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0
    );

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length;
  }

  #checkExist(hashCode) {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] === undefined) return null
      if (this.buckets[i].hashCode === hashCode) return this.buckets[i]
    }
    return null
  }

  set(key, value) {
    const hashCode = this.#hash(key)
    const newNode = new HashNode(key, hashCode, value)
    let oldNode = this.#checkExist(hashCode)
    newNode.next = oldNode
    if (oldNode) {
      while (oldNode){
        if (oldNode.key === key) throw new Error('Duplicate value in HashTable object')
        oldNode = oldNode.next
      }
      this.buckets[this.#getBucketIndex(hashCode)] = newNode
      return newNode
    }
    this.#addBucket(newNode)
    return newNode
  }

  get(key) {
    // console.log(this.buckets);
    const hashCode = this.#hash(key)
    let node = this.#checkExist(hashCode);
    while (node) {
      if (node.key === key) return node.value
      node = node.next
    }
    return undefined
  }
}


// EXAMPLE
// const hashTable = new HashTable()
// hashTable.set(1, 123)
// hashTable.set(3, 1234)
// hashTable.set(4, 12345)
// console.log(hashTable.get(1));
// console.log(hashTable.get(3));
// console.log(hashTable.get(4));
