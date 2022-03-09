class MergeSort {
  static arr = []
  static #merge(left, right) {
    const result = []
    while (left.length !== 0 || right.length !== 0) {
      if (left.length === 0 && right.length !== 0) {
        result.push(right.shift())
      }
      else if (left.length !== 0 && right.length === 0) {
        result.push(left.shift())
      }
      else if (left[0] <= right[0]) {
        result.push(left.shift())
      }
      else {
        result.push(right.shift())
      }
    }
    return result
  }
  static #divide(begin = 0, end = this.arr.length - 1) {
    if (begin === end) return [this.arr[begin]]
    const k = Math.floor(begin/2) + Math.floor(end/2)
    let left = this.#divide(begin, k)
    let right = this.#divide(k+1, end)
    return this.#merge(left, right)
  }
  static run(array) {
    this.arr = array
    return this.#divide()
  }
}

const arr = [10, 3, 9, 1, -3, 0, 8, 4, 4, -1, -2, 100]
console.log(MergeSort.run(arr))
