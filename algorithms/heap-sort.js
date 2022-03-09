class HeapTree {
  static heapTree = [];

  static #getParentIndex(index) {
    if (index === 0) return null;
    if (index === 1 || index === 2) return 0;
    return Math.ceil((index - 2) / 2);
  }

  static #swap(a, b) {
    const temp = this.heapTree[a];
    this.heapTree[a] = this.heapTree[b];
    this.heapTree[b] = temp;
  }

  static #heap(index) {
    let parentIndex = this.#getParentIndex(index);
    while (true) {
      // console.log(`index: ${index}, parent: ${parentIndex}`);
      if (
        parentIndex === null
        || this.heapTree[index] >= this.heapTree[parentIndex]
      ) break;
      this.#swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.#getParentIndex(index);
    }
  }

  static #addNode(value) {
    if (this.heapTree.length === 0) return this.heapTree.push(value);
    this.heapTree.push(value);
    this.#heap(this.heapTree.length - 1)
    // console.log(this.heapTree);
  }

  static #rebuild() {
    let i = 0, left, right;
    while (true) {
      left = (i * 2) + 1;
      right = (i * 2) + 2;

      // 1 node
      if (this.heapTree[left] === undefined) return;

      // 2 nodes
      if (this.heapTree[right] === undefined && this.heapTree[i] <= this.heapTree[left]) return;
      if (this.heapTree[right] === undefined && this.heapTree[i] > this.heapTree[left]) {
        this.#swap(left, i);
        i = left;
        continue;
      }

      // 3 nodes
      if (this.heapTree[i] <= this.heapTree[left] && this.heapTree[i] <= this.heapTree[right]) break;
      if (this.heapTree[left] <= this.heapTree[right] && this.heapTree[left] < this.heapTree[i]) {
        this.#swap(i, left);
        i = left;
        continue;
      }
      if (this.heapTree[right] < this.heapTree[left] && this.heapTree[right] < this.heapTree[i]) {
        this.#swap(i, right);
        i = right;
        continue;
      }
    }
  }

  static getSortedArray(arr) {
    const result = [];
    arr.forEach(item => {
      this.#addNode(item);
    });
    // console.log(this.heapTree);
    for (let i = 0; i < arr.length; i++) {
      this.#swap(0, this.heapTree.length - 1);
      result.push(this.heapTree.pop());
      this.#rebuild();
    }
    return result;
  }

}

const arr = [10, 3, 9, 1, -3, 0, 8, 4, 4, -1, -2, 100];
console.log(HeapTree.getSortedArray(arr));
